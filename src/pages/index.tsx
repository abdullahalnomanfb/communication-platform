import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Home from "../components/Home";
const HomePage = () => {
  const { data: session } = useSession();

  const router = useRouter();

  // if (session) {
  //   session && router.push("/inbox");
  // }

  return (
    <>
      <Head>
        <title>Communication Platform</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {session ? <UserEntryPage /> : <Home />}  */}
        <Home />
      </main>
    </>
  );
};

export default HomePage;
