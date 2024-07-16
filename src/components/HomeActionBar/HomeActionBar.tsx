import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
function HomeActionBar({
  setApiInBar,
  setApiInBarSearch,
  darkMode,
}: {
  setApiInBar: any;
  setApiInBarSearch: any;
  darkMode: boolean;
}) {
  const selectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setApiInBar(e.target.value);
  };
  const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setApiInBarSearch(e.target.value);
  };
  return (
    <form
      className={`w-11/12 m-auto flex justify-between py-8 ${
        darkMode ? "bg-neutral-900" : ""
      }`}
    >
      <div className="relative w-3/5 md:w-1/3">
        <input
          type="text"
          onChange={searchValue}
          placeholder="search for a Countrey..."
          className={`border-2 outline-none w-full pl-12 h-12 ${
            darkMode ? "bg-neutral-700 text-white border-neutral-800" : ""
          }`}
        />
        <FaSearch
          className={`absolute left-4 top-4 ${darkMode ? "text-white" : ""}`}
        />
      </div>

      <select
        name="filter-by-region"
        onChange={selectValue}
        className={`border-2 outline-none ${
          darkMode ? "bg-neutral-700 text-white border-neutral-800" : ""
        }`}
      >
        <option value="filter-by-region" hidden>
          filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}

export default HomeActionBar;
