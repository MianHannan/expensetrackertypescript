import React from "react";
import {
  appContext,
  appStateReducer,
  initialAppState,
} from "../context/appContext";
import "../style.css";
import Balance from "./Balance";
import Footer from "./Footer";
import History from "./History";
import New from "./New";

function App() {
  const [appState, setAppState] = React.useReducer(
    appStateReducer,
    initialAppState
  );

  return (
    <appContext.Provider value={{ appState, setAppState }}>
      <h2>Expense Tracker Typescript by Mian Hannan</h2>
      <div className="container">
        <Balance />
        <History />
        <New />
        <Footer />
      </div>
    </appContext.Provider>
  );
}

export default App;
