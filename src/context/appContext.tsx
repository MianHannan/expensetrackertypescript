import React from "react";
import {
  IappContext,
  IappState,
  Itransaction,
  TappStateAction,
} from "./interfaces";

export const appContext = React.createContext<IappContext>({} as IappContext);

export const appStateReducer = (
  prevState: IappState,
  action: TappStateAction
): IappState => {
  switch (action.type) {
    case "add":
      return {
        balance: prevState.balance + action.value,
        income: prevState.income + (action.value > 0 ? action.value : 0),
        expense: prevState.expense + (action.value < 0 ? action.value : 0),
        history: [
          ...prevState.history,
          {
            title: action.title,
            value: action.value,
          },
        ],
      };
    case "remove":
      let newHistory: Itransaction[] = prevState.history.filter(
        (item: Itransaction, id: number) => id !== action.id
      );
      return {
        balance: prevState.balance - action.value,
        income: prevState.income - (action.value > 0 ? action.value : 0),
        expense: prevState.expense - (action.value < 0 ? action.value : 0),
        history: newHistory,
      };
    default:
      throw new Error();
  }
};

export const initialAppState: IappState = {
  balance: 0,
  income: 0,
  expense: 0,
  history: [],
};
