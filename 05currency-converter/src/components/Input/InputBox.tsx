import { IInputBox } from "./type";

const InputBox: React.FC<IInputBox> = ({ label, value, currencyType, setValue, countryList }) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5 text-black"
          type="number"
          placeholder="Amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-500 cursor-pointer outline-none" onChange={(e) => currencyType(e.target.value)}>
          {Object.keys(countryList).map((value, index) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
