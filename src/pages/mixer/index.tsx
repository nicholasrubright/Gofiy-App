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
import Alert from "./components/Alerts/Alert";
import { AlertEnum } from "@mytypes/internal.type";

export default function Page(props: PageProps) {
  const { token, profile } = props;

  if (token === null) {
    return <ErrorAlert message={"There was a problem. No Code Bro!"} />;
  } else {
    return (
      <div className="container">
        <div className="row float-end">
          <Navbar profile={profile} />
        </div>
        {true && (
          <Alert type={AlertEnum.INFO} message={"This is a test alert."} />
        )}
        <div className="row container-fluid">
          <Mixer />
        </div>
      </div>
    );
  }
}

interface PageProps {
  token: string | null;
  profile: UserProfileResponse | null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // defaultProps
  const defaultProps = { props: { token: null, profile: null } };

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

    let tokenResponse = await getToken(code as string);

    if ("error" in tokenResponse) {
      return defaultProps;
    } else {
      tokenResponse = tokenResponse as TokenResponse;
    }

    let profileResponse = await getProfile(tokenResponse.token);

    if ("error" in tokenResponse) {
      return defaultProps;
    } else {
      profileResponse = profileResponse as UserProfileResponse;
    }

    return {
      props: {
        token: tokenResponse.token,
        profile: profileResponse,
      },
    };
  } catch (err) {
    console.error("There was a problem!", err);
    return defaultProps;
  }
}
