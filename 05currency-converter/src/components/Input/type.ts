export interface IInputBox {
    label: string;
    value: string;
    currencyType: React.Dispatch<React.SetStateAction<string>>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    countryList: Object;
  }