import { useEffect, useState } from "react";
import MainLayout from "./component/layout/MainLayout";
import "./index.css";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Loading from "./component/shared/Loading/Loading";


function App() {
  const [welcomeLoading, setWelcomeLoading] = useState(true);
  const location = useLocation();
  

  useEffect(() => {
    const time = setTimeout(() => {
      setWelcomeLoading(false);
      localStorage.setItem("welcomeLoading","true")
    }, 1500);

    return () => clearTimeout(time);
  }, [welcomeLoading]);

const isAlreadtwelcomeLoading=localStorage.getItem("welcomeLoading")

  // console.log(welcomeLoading);
  if (isAlreadtwelcomeLoading !="true" && welcomeLoading && location?.pathname == "/") {
    return (
    <div className="min-h-screen flex justify-center items-center bg-primaryColor">
       <Loading></Loading>
    </div>
    );
  }
  return (
    <div className="bg-primaryColor ">
      <div className="mx-auto">
      <MainLayout></MainLayout>
      <Toaster />

      </div>
    </div>
  );
}

export default App;
