import { useEffect, useState } from "react";
import MainLayout from "./component/layout/MainLayout";
import logo from "./assets/images/logo.webp";
import "./index.css";
import { useLocation } from "react-router-dom";


function App() {
  const [welcomeLoading, setWelcomeLoading] = useState(true);
  const location = useLocation();
  // console.log(location.pathname);
  useEffect(() => {
    const time = setTimeout(() => {
      setWelcomeLoading(false);
    }, 1500);

    return () => clearTimeout(time);
  }, [welcomeLoading]);

  // console.log(welcomeLoading);
  if (welcomeLoading && location?.pathname == "/") {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col">
        <img src={logo} alt="" className="welcomeLogo " />
      </div>
    );
  }
  return (
    <>
      <MainLayout></MainLayout>
      
    </>
  );
}

export default App;
