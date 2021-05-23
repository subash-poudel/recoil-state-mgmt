import React from "react";
import { useRecoilValue } from "recoil";
import charCountSelector from "./atoms/charCountSelector";

const CharacterCount = () => {
  const value = useRecoilValue(charCountSelector);

  return <p>Character Count: {value}</p>;
};

export default CharacterCount;
