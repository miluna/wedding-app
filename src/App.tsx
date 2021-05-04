import Header from "./layout/Header/Header";
import HeroSection from "./layout/HeroSection/HeroSection";
import DescriptionSection from "./layout/DescriptionSection/DescriptionSection";
import PlaceSection from "./layout/PlaceSection/PlaceSection";
import FormSection from "./layout/FormSection/FormSection";
import BottomSection from "./layout/BottomSection/BottomSection";
import { Fragment, useEffect } from "react";
import firebase from "firebase";
import Toast from "./components/Toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const App = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <Fragment>
      <div className="w-full h-full">
        <Header />
        <div className="container mx-auto lg:px-24 sm:px-8">
          <HeroSection />
          <DescriptionSection />
          <FormSection />
          <PlaceSection />
        </div>
        <BottomSection />
        {/* <Toast /> */}
      </div>
    </Fragment>
  );
};

export default App;
