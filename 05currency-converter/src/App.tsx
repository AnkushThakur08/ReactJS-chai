import { useEffect, useState } from "react";
import InputBox from "./components/Input/InputBox";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");

  const [fromCountry, setFromCountry] = useState<string>("usd");
  const [toCountry, setToCountry] = useState<string>("inr");

  const [countryList, setCountryList] = useState<Record<string, number>>({});

  const getCurrencyList = async (currency: string) => {
    try {
      const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
      console.log("ssss====>", response);
      setCountryList(response?.data[currency]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrencyList(fromCountry);
  }, [fromCountry]);

  const handleConversion = () => {
    if (!toCountry || !countryList[toCountry]) {
      toast.error("Invalid conversion currency");
      return;
    }
    const convertedAmount = parseFloat(fromAmount) * countryList[toCountry];
    setToAmount(convertedAmount.toFixed(2));
  };

  const handleSwap = () => {
    if (!toAmount || !toCountry) {
      toast.error("Cannot swap: Please enter an amount and select a currency.");
      return;
    }
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCountry(toCountry);
    setToCountry(fromCountry);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  countryList={countryList}
                  currencyType={setFromCountry}
                  value={fromAmount}
                  setValue={setFromAmount}
                  country={fromCountry}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={handleSwap}
                  aria-label="Swap Currencies"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  countryList={countryList}
                  currencyType={setToCountry}
                  value={toAmount}
                  setValue={setToAmount}
                  country={toCountry}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                aria-label="Convert Currency"
                onClick={handleConversion}
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
