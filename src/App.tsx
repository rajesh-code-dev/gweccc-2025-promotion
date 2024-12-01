import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutEvent from "./components/AboutEvent";
import EventSchedule from "./components/EventSchedule";
import RegistrationForm from "./components/RegistrationForm";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

const App = () => {
  return (
    <div className="font-sans bg-slate-600 ">
      <MaxWidthWrapper>
        <Header />
        <Banner />
        <AboutEvent />
        <EventSchedule />
        <RegistrationForm />
      </MaxWidthWrapper>
    </div>
  );
};

export default App;
