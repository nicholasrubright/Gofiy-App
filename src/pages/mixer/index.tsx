import { Mixer } from "@/pages/mixer/components/Mixer";

export default function Page() {
  return (
    <div>
      <Mixer />
    </div>
  );
}

/*
import type { GetServerSidePropsContext } from "next";
import GoifyApi from "./api";
import { AuthUrlResponse } from "@apiTypes/index";

export default function Portal({ code }: { code: string }) {
  if (code === null) {
    return (
      <div>
        <h1>No Code bro</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Portal Page!!</h1>
      <p>Code: {code}</p>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const goify = new GoifyApi();

    // Get Auth Url
    const response = await goify.getAuthUrl();

    if ("error" in response) {
      return {
        props: {
          code: null,
        },
      };
    }

    const { url } = response as AuthUrlResponse;

    let code = context.query["code"];

    if (!code && url) {
      return {
        redirect: {
          permanent: false,
          destination: url,
        },
      };
    }

    await goify.setToken(code as string);

    return {
      props: {
        code: goify.token,
      },
    };
  } catch (err) {
    console.error("there was a problem: ", err);
    return {
      props: {
        code: null,
      },
    };
  }
}
*/
