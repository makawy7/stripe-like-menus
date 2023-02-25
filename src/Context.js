import { createContext, useContext, useState, useRef } from "react";


const MyContext = createContext();

function Conetxt({ children }) {
  const [showSub, setShowSub] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const [sublink, setSublink] = useState({});

  const styleRef = useRef(null);

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
      value={{
        showSub,
        showSide,
        openSub,
        closeSub,
        openSide,
        closeSide,
        setSublink,
        sublink,
        styleRef,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => useContext(MyContext);
export default Conetxt;
