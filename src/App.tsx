import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Outlet context={[darkMode, setDarkMode]} />
    </>
  );
}
export default App;
