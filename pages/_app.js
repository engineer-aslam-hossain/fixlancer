import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import LandingPageLayout from "../components/LandingPageLayout/LandingPageLayout";
import { ContextProvider } from "../components/FixLancerContext/FixLancerContext";
import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.route === "/" && router.query && router.query.login !== "true") {
    return (
      <ContextProvider>
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    );
  }

  if (Component.getLayout) {
    return (
      <ContextProvider>
        {Component.getLayout(<Component {...pageProps} />)}
      </ContextProvider>
    );
  }

  return (
    <ContextProvider>
      <LandingPageLayout>
        <Component {...pageProps} />
      </LandingPageLayout>
    </ContextProvider>
  );
}

export default MyApp;
