import { Link } from "react-router-dom";

function HomeItem({ apiData, darkMode }: { apiData: any; darkMode: boolean }) {
  return (
    <Link
      to={`/rest-world/${apiData.name.common}`}
      className={`flex flex-col w-1/5 mx-2 my-10 ${
        darkMode ? "bg-neutral-700 text-white" : "bg-gray-100"
      }`}
    >
      <img src={apiData.flags.png} alt={apiData.flags.alt} className=" h-2/4" />
      <div className="h-2/4 flex flex-col justify-center pl-10">
        <h2 className=" text-xl mb-4">{apiData.name.common}</h2>
        <p className="text-sm">population: {apiData.population}</p>
        <p className="text-sm">capital: {apiData.capital}</p>
        <p className="text-sm">region: {apiData.region}</p>
      </div>
    </Link>
  );
}

export default HomeItem;
