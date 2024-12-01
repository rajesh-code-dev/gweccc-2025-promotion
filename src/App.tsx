import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutEvent from "./components/AboutEvent";
import EventSchedule from "./components/EventSchedule";
import RegistrationForm from "./components/RegistrationForm";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Video from "./components/Video";

const App = () => {
  return (
    <div className="font-sans">
      <MaxWidthWrapper>
        <Header />
        <Video />
        <Banner />
        <AboutEvent />
        <EventSchedule />
        <RegistrationForm />
      </MaxWidthWrapper>
    </div>
  );
};

export default App;
