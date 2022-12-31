import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import SignInPage from "./pages/SignInPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "Dove Market | today's-deals";
        metaDescription =
          "If you are looking for good Dove Market deals and bargains, Today's Deals is the place to come. We are your online one-stop shop for savings and specials on our Market Place.Browse & discover millions of products. Read customer reviews and find best sellers. Get deals on Today's deals on Dove Market in Cell Phones & Accessories on Dove Market.";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/sign-in-page" element={<SignInPage />} />
    </Routes>
  );
}
export default App;
