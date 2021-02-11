import "./App.css";
import Home from "./components/Home";
import MyLibrary from "./components/MyLibrary";
import NavBar from "./components/NavBar";
import Cookies from "js-cookie";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUserData } from "./auth/server";
import { setUser } from "./store/index";

function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));
  const userData = useSelector((state) => state.user);

  useEffect(async () => {
    if (token && !userData.user.isLoggedIn) {
      await setSession(token);
    }
  }, []);

  const setSession = async (token) => {
    try {
      const response = await setUserData(token);
      if (response) {
        dispatch(setUser(response));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <div data-testid="approutes" className="app-routes">
        <NavBar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/library" component={MyLibrary} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
