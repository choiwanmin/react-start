import { useRef, useState } from "react";

export const Input = () => {
  const [text, setText] = useState(""); // +>재랜더링 기능?을 포함하고 있음
  const refText = useRef("");

  return (
    <>
      {/* <input onChange={(e) =>
                {
                    setText(e.target.value);
                    console.log(e.target.value);
                }} />
            <button onClick={() => alert(text)}>클릭!</button> */}
      {/* e는 event의 약자 */}
      {/* <br /> */}
      {/* 입력된 값: {text} */}

      <input ref={refText} />
      {/* 랜더링과 다른 개념, 갖고만 있음 */}
      <button onClick={() => alert(refText.current.valueOf)}>클릭!</button>
      {/* 객체나 배열의 주소값이 변경되지 않고 사용됨, 리액트에서 랜더링시 인지하지 못함함 */}
    </>
  );
};
