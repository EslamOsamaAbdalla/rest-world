import { useEffect, useState } from "react";
import HomeActionBar from "../HomeActionBar/HomeActionBar";
import Container from "../container/Container";
import NavBar from "../navBar/NavBar";
import { useOutletContext } from "react-router-dom";
function Home() {
  const [darkMode, setDarkMode] = useOutletContext<boolean[]>();
  const [apiInBar, setApiInBar] = useState<[]>();
  const [apiInBarValue, setApiInBarValue] = useState<[]>();
  const [apiInBarSearch, setApiInBarSearch] = useState<[] | string>();
  useEffect(() => {
    if (apiInBar != undefined) {
      fetchRegion();
    }
  }, [apiInBar]);
  useEffect(() => {
    if (apiInBarSearch != undefined) {
      if (apiInBarSearch == "") {
        fetchAll();
      } else {
        fetchSearch();
      }
    }
  }, [apiInBarSearch]);

  const fetchRegion = async () => {
    await fetch(`https://restcountries.com/v3.1/region/${apiInBar}`)
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setApiInBarValue(e);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchAll = async () => {
    await fetch(`https://restcountries.com/v3.1/all`)
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setApiInBarValue(e);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchSearch = async () => {
    await fetch(`https://restcountries.com/v3.1/name/${apiInBarSearch}`)
      .then((Response) => {
        return Response.json();
      })
      .then((e) => {
        setApiInBarValue(e);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={`${darkMode ? "bg-neutral-900" : ""}`}>
      <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
      <HomeActionBar
        setApiInBar={setApiInBar}
        setApiInBarSearch={setApiInBarSearch}
        darkMode={darkMode}
      />
      <Container
        apiInBar={apiInBarValue}
        fetchAll={fetchAll}
        darkMode={darkMode}
      />
    </div>
  );
}
export default Home;
