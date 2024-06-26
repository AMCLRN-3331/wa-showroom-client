import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import Footer from "./components/Footer";
import Video from "./components/Video";


const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      if(Object.keys(data).length === 0){
        user.setUser(data);
      user.setIsAuth(false);
      } else{
        user.setUser(data);
      user.setIsAuth(true);
      }
      
    }).finally(() => setLoading(false));
  }, []);

  if(loading){
    return <Spinner animation="grow" />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />

    </BrowserRouter>
  );
});

export default App;
