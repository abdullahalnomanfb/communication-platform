import { useRouter } from "next/router";
import { useEffect } from "react";
import NavBar from "./NavBar";
const Layout = ({ children }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (router.route === "/inbox") {
    }
  }, [router]);
  return (
    <>
      {router.route !== "/inbox" && <NavBar />}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
