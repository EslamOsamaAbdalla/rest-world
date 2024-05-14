import { useEffect, useState } from "react";
import HomeItem from "../HomeItem/HomeItem";
function Container({
  apiInBar,
  fetchAll,
  darkMode,
}: {
  apiInBar: any;
  fetchAll: any;
  darkMode: boolean;
}) {
  const [api, setApi] = useState();
  useEffect(() => {
    fetchAll();
  }, []);
  useEffect(() => {
    return setApi(apiInBar);
  }, [apiInBar]);
  return (
    <div className=" w-11/12 min-h-[73vh] m-auto flex justify-between flex-wrap">
      {Array.isArray(api) ? (
        (api as string[]).map((e: {}, i: number) => {
          return <HomeItem apiData={e} key={i} darkMode={darkMode} />;
        })
      ) : (
        <div
          className={`w-full h-40 flex justify-center items-center${
            darkMode ? " text-white" : ""
          }`}
        >
          No Data
        </div>
      )}
    </div>
  );
}

export default Container;
