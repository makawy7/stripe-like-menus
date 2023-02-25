import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const MyContext = createContext();

function Conetxt({ children }) {
  const [showSub, setShowSub] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const [sublink, setSublink] = useState({});

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
      value={{ showSub, showSide, openSub, closeSub, openSide, closeSide, setSublink, sublink }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => useContext(MyContext);
export default Conetxt;
