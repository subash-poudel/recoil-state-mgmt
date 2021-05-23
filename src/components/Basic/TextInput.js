import React from "react";
import { useRecoilState } from "recoil";
import textStateAtom from "./atoms/textStateAtom";


const TextInput = () => {
  const [text, setText] = useRecoilState(textStateAtom);

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

export default TextInput;
