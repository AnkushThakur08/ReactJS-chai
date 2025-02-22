export interface IInputBox {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  countryList: Record<string, number>;
}
