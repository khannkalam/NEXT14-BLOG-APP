"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import React, {useContext, useState } from "react";

const ThemeProvider = ({children}) => {
  const { theme } = useContext(ThemeContext);
  const [mounted ,setMounted] = useState(false);

  useState(()=>{

    setMounted(true)
    
  }, [])

  if(mounted){
      return <div className={theme}>{children}</div>;
}

};

export default ThemeProvider;
