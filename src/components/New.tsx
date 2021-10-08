import React, { ChangeEvent } from "react";
import { appContext } from "../context/appContext";

export default function New() {
  const [title, setTitle] = React.useState<string>("");
  const [value, setValue] = React.useState<any>("");
  const { setAppState } = React.useContext(appContext);

  return (
    <div>
      <h3>Add new transaction</h3>
      <form
        id="form"
        onSubmit={(ev) => {
          ev.preventDefault();
          setAppState({
            type: "add",
            title,
            value: Number(value),
          });
          setTitle("");
          setValue("");
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={title}
            placeholder="Enter text..."
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              setTitle(ev.target.value)
            }
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={value}
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              setValue(Number(ev.target.value))
            }
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
