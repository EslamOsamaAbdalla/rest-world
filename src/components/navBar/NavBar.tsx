import { FaRegMoon, FaMoon } from "react-icons/fa";
function NavBar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) {
  return (
    <header
      className={`border-b-2 h-12 capitalize font-bold ${
        darkMode ? " bg-neutral-900 text-white" : ""
      }`}
    >
      <div className="w-11/12 m-auto flex justify-between items-center h-full">
        <h1>where in the world?</h1>
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => {
            setDarkMode((e: any) => !e);
          }}
        >
          {darkMode ? <FaMoon /> : <FaRegMoon />}
          <span className="ml-2 capitalize">dark mode</span>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
