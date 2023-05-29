import { Mixer } from "@/pages/mixer/components/Mixer";
import { GetServerSidePropsContext } from "next";
import {
  AuthorizationUrlResponse,
  TokenResponse,
  UserPlaylistsResponse,
  UserProfileResponse,
} from "@mytypes/index";
import ErrorAlert from "@shared/components/ErrorAlert";
import {
  getAuthorizationUrl,
  getPlaylists,
  getProfile,
  getToken,
} from "@/api/goify.api";
import Navbar from "@shared/components/Navbar";
import { useEffect, useState } from "react";

export default function Page(props: PageProps) {
  const { code } = props;

  const [profile, setProfile] = useState<UserProfileResponse | null>(null);
  const [playlists, setPlaylists] = useState<UserPlaylistsResponse | null>(
    null
  );

  if (code === null) {
    return <ErrorAlert message={"There was a problem. No Code Bro!"} />;
  }

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("goify-token");
      if (token !== null) {
        let profileResponse = await getProfile(token);

        if ("error" in profileResponse) {
          return;
        } else {
          profileResponse = profileResponse as UserProfileResponse;
        }

        setProfile(profileResponse);

        let playlistsResponse = await getPlaylists(token);

        if ("error" in playlistsResponse) {
          return;
        } else {
          playlistsResponse = playlistsResponse as UserPlaylistsResponse;
        }

        setPlaylists(playlistsResponse);

        return;
      } else {
        let tokenResponse = await getToken(code);

        if ("error" in tokenResponse) {
          return;
        } else {
          tokenResponse = tokenResponse as TokenResponse;
        }

        let profileResponse = await getProfile(tokenResponse.token);

        if ("error" in profileResponse) {
          return;
        } else {
          profileResponse = profileResponse as UserProfileResponse;
        }

        setProfile(profileResponse);

        let playlistsResponse = await getPlaylists(tokenResponse.token);

        if ("error" in playlistsResponse) {
          return;
        } else {
          playlistsResponse = playlistsResponse as UserPlaylistsResponse;
        }

        setPlaylists(playlistsResponse);

        localStorage.setItem("user", profileResponse.id);
        localStorage.setItem("goify-token", tokenResponse.token);
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
        <Mixer playlists={playlists} />
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
      response = response as AuthorizationUrlResponse;
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
