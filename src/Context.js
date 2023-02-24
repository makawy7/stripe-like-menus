import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const MyContext = createContext();

function Conetxt({ children }) {
  const [showSub, setShowSub] = useState(true);
  const [showSide, setShowSide] = useState(false);
  const [subs, setSubs] = useState(sublinks);

  const openSub = () => {
    setShowSub(true);
  };
  const closeSub = () => {
    setShowSub(false);
  };
  const openSide = () => {
    setShowSide(true);
  };
  const closeSide = () => {
    setShowSide(false);
  };

  return (
    <MyContext.Provider
      value={{ showSub, showSide, openSub, closeSub, openSide, closeSide }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => useContext(MyContext);
export default Conetxt;
