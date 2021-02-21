import { useState } from "react";

const useInput = (InitialValue = "") => {
  const [value, setValue] = useState(InitialValue);
  const reset = () => {
    setValue(InitialValue);
  };
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default useInput;
