import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage.js";
import { Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Puzz from "./components/Puzz";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route exact path="/chats" component={ChatPage} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/puzz" component={Puzz} />
    </div>
  );
};

export default App;
