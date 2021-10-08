export interface Itransaction {
  title: string;
  value: number;
}

export interface IappState {
  balance: number;
  income: number;
  expense: number;
  history: Itransaction[];
}

export type TappStateAction =
  | {
      type: "add";
      title: string;
      value: number;
    }
  | {
      type: "remove";
      id: number;
      value: number;
    };

export interface IappContext {
  appState: IappState;
  setAppState: React.Dispatch<TappStateAction>;
}
