import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-bg focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname} className="page-in">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
