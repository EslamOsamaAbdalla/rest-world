import { Link, useParams, useOutletContext } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
function ItemPage() {
  const [darkMode, setDarkMode] = useOutletContext<boolean[]>();
  let { countryName } = useParams();
  const [theApiData, setTheApiData] = useState<any>();
  const [currencie, setCurrencie] = useState<any>();
  const [bordersVar, setBorders] = useState<[]>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    getData();
  }, [countryName]);
  const getData = async () => {
    await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    )
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        let currencies = e[0].currencies;
        let languages = e[0].languages;
        let borders = e[0].borders;
        let currencie;
        let languag = [];
        for (const key in currencies) {
          currencie = key;
        }
        for (const key in languages) {
          languag.push(key);
        }
        setCurrencie(currencie);
        setLang(languag);
        setBorders(borders);
        setTheApiData(e);
      });
  };
  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      {Array.isArray(theApiData) ? (
        <div className={`w-full min-h-screen md:h-[92vh] ${darkMode ? " bg-neutral-800" : ""}`}>
          <div
            className={`w-11/12 flex flex-col ${darkMode ? "text-white" : ""}`}
          >
            <Link
              to="/rest-world"
              className="py-3 px-8 my-12 ml-[5%] self-start border-2 flex items-center"
            >
              <FaLongArrowAltLeft className="mx-2" /> back
            </Link>
            <div className="w-11/12 min-h-[40vh] m-auto flex flex-col md:flex-row">
              <img src={theApiData[0].flags.png} className="max-h-64 ml-10 mb-10 md:m-0" />
              <div className="flex flex-col justify-between ml-[10%] w-10/12">
                <div className="flex flex-col">
                  <h2 className="text-2xl">{theApiData[0].name.common}</h2>
                  <div className="flex mt-6">
                    <div>
                      <p className=" font-bold">
                        Native Name:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].name.official}
                        </span>
                      </p>
                      <p className=" font-bold">
                        Population:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].population}
                        </span>
                      </p>
                      <p className=" font-bold">
                        Region:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].region}
                        </span>
                      </p>
                      <p className=" font-bold">
                        Subregion:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].subregion}
                        </span>
                      </p>
                      <p className=" font-bold">
                        Capital:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].capital}
                        </span>
                      </p>
                    </div>
                    <div className="ml-[10%]">
                      <p className=" font-bold">
                        Currencies: Top Level Domain:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].tld}
                        </span>
                      </p>
                      <p className=" font-bold">
                        Currencies:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {theApiData[0].currencies[currencie].name}
                        </span>
                      </p>
                      <p className=" font-bold">
                        languages:{" "}
                        <span
                          className={`page-span ${
                            darkMode ? "text-gray-400" : "text-gray-800"
                          }`}
                        >
                          {lang.map((e: any, i: number) => {
                            return (
                              <span key={i}>
                                {theApiData[0].languages[e]} ,
                              </span>
                            );
                          })}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-wrap">
                  <p className="mr-12">Border Countries:</p>
                  {bordersVar &&
                    bordersVar.map((c: string, i: number) => {
                      return (
                        <button
                          key={i}
                          className="border-2 mx-3 my-2 px-8 py-2"
                        >
                          {c}
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "no data"
      )}
    </>
  );
}

export default ItemPage;
