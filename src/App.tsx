import "./App.css";
import MainLayOut from "./components/Layout/MainLayOut";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className=" min-h-screen w-full ">
      <MainLayOut />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
