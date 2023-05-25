import { Mixer } from "@/pages/mixer/components/Mixer";
import { GetServerSidePropsContext } from "next";
import {
  AuthUrlResponse,
  TokenResponse,
  UserProfileResponse,
} from "@mytypes/response.type";
import ErrorAlert from "@shared/components/ErrorAlert";
import { getAuthorizationUrl, getProfile, getToken } from "@/api/goify.api";
import Navbar from "@shared/components/Navbar";
import { useEffect, useState } from "react";

export default function Page(props: PageProps) {
  const { code } = props;

  const [token, setToken] = useState<string>("");
  const [profile, setProfile] = useState<UserProfileResponse | null>(null);

  if (code === null) {
    return <ErrorAlert message={"There was a problem. No Code Bro!"} />;
  }

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");
      if (token !== null) {
        setToken(token);

        let profileResponse = await getProfile(token);

        if ("error" in profileResponse) {
          return;
        } else {
          profileResponse = profileResponse as UserProfileResponse;
        }

        setProfile(profileResponse);

        return;
      } else {
        let tokenResponse = await getToken(code);

        if ("error" in tokenResponse) {
          return;
        } else {
          tokenResponse = tokenResponse as TokenResponse;
        }

        setToken(tokenResponse.token);

        let profileResponse = await getProfile(tokenResponse.token);

        if ("error" in profileResponse) {
          return;
        } else {
          profileResponse = profileResponse as UserProfileResponse;
        }

        setProfile(profileResponse);
        localStorage.setItem("token", tokenResponse.token);
      }
    };

    init();
  }, [code]);

  return (
    <div className="container">
      <div className="row float-end">
        <Navbar profile={profile} />
      </div>
      <div className="row container-fluid">
        <Mixer />
      </div>
    </div>
  );
}

interface PageProps {
  code: string | null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // defaultProps
  const defaultProps = { props: { code: null } };

  try {
    const { query } = context;
    const { code } = query;

    let response = await getAuthorizationUrl();

    if ("error" in response) {
      return defaultProps;
    } else {
      response = response as AuthUrlResponse;
    }

    const { url } = response;

    if (!code && url) {
      return { redirect: { permanent: false, destination: url } };
    }

    return {
      props: {
        code,
      },
    };
  } catch (err) {
    console.error("There was a problem!", err);
    return defaultProps;
  }
}
