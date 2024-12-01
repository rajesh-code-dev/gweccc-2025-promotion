import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutEvent from "./components/AboutEvent";
import EventSchedule from "./components/EventSchedule";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <div className="font-sans bg-slate-600 ">
      <Header />
      <Banner />
      <AboutEvent />
      <EventSchedule />
      <RegistrationForm />
    </div>
  );
};

export default App;
