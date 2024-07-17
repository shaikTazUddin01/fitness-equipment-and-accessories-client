import { useEffect, useState } from "react";
import MainLayout from "./component/layout/MainLayout";
import "./index.css";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Loading from "./component/shared/Loading/Loading";


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
     <Loading></Loading>
    );
  }
  return (
    <>
      <MainLayout></MainLayout>
      <Toaster />
    </>
  );
}

export default App;
