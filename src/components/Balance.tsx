import React from "react";
import { appContext } from "../context/appContext";

export default function Balance() {
  const { appState } = React.useContext(appContext);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {appState.balance < 0 ? "-" : "+"}$
        {Math.abs(appState.balance).toFixed(2)}
      </h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {appState.income < 0 ? "-" : "+"}$
            {Math.abs(appState.income).toFixed(2)}
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {appState.expense < 0 ? "-" : "+"}$
            {Math.abs(appState.expense).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
