import { faker } from "@faker-js/faker";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const Card = () => {
  const theme = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <div
      className={`h-[500px] w-[500px] border rounded-lg p-5 
    ${theme.theme == "dark" ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black"}`}
    >
      <div className="flex flex-col justify-center items-center">
        <img className="h-80 w-[400px] object-fill" alt="image" src={faker.image.url()} />
        <p className="text-2xl font-medium antialiased">{faker.commerce.productName()}</p>
      </div>
      <div className="flex justify-between items-baseline my-10">
        <p className="text-2xl font-bold">$ {faker.commerce.price()}</p>
        <button className="text-xl bg-blue-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
