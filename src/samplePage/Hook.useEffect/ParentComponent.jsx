import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export const ParantComponent = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="p-8 pt-8 w-96 h-96 border border-black-400">
      <button onClick={() => setFlag(!flag)}>자식컴포넌트 등장해주세요</button>
      <p className="font-mono text-2xl">ParantComponent</p>
      <br />
      {
        flag && <ChildComponent />
        // flag && <ChildComponent /> : null 가능하나
      }
    </div>
  );
};
