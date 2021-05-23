import { selector } from "recoil";
import textStateAtom from "../atoms/textStateAtom";

const charCountSelector = selector({
  key: 'charCountSelector',
  get: ({get}) => {
    const text = get(textStateAtom);

    return text.length;
  }
});

export default charCountSelector;
