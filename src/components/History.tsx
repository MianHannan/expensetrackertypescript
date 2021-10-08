import React from "react";
import { appContext } from "../context/appContext";
import { Itransaction } from "../context/interfaces";

export default function History() {
  const { appState, setAppState } = React.useContext(appContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {appState.history.map((transaction: Itransaction, id: number) => (
          <li className={transaction.value < 0 ? "minus" : "plus"} key={id}>
            {transaction.title}{" "}
            <span>
              {transaction.value < 0 ? "-" : "+"}${Math.abs(transaction.value)}
            </span>
            <button
              className="delete-btn"
              onClick={() => {
                setAppState({
                  type: "remove",
                  id,
                  value: transaction.value,
                });
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
