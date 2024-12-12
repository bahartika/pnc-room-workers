import Header from "./components/Header";
import DigitalClock from "./components/Digitalclock";
import ProfileContainer from "./components/Personcontainer";
import Shift from "./components/Shift";

function App() {
  return (
    <div className="bg-hero-pattern xl:bg-cover xl:bg-bottom w-full h-full py-6 px-10 flex flex-col items-center overflow-hidden caret-transparent text-slate-700">
      <Header />
      <DigitalClock />
      <Shift />
      <ProfileContainer />
    </div>
  );
}

export default App;
