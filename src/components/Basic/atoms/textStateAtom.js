import { atom } from "recoil";

const textStateAtom = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export default textStateAtom;