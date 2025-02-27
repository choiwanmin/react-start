import { useEffect, useState } from "react";

export const ChildComponent = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => { alert("자식컴포넌트 열림") // +>컴포넌트 라이프사이클(생성되고 사라지는 과정/생성-변경-제거), dom에서 발생
  //     // +>어떤 기능이나 동작을 사용하고자 할떄 훅이라는 것을 통해서 사용한다.
  // }, [])
  useEffect(() => {
    alert("자식컴포넌트 열림");

    return () => {
      alert("자식컴포넌트 닫힘");
    }; // +>컴포넌트가 사라질 때/종료될 때 실행됨
  }, []); // +>배열이 있으면 화면이 열릴때 최초에 한번만 실행되게됨, 의존성 배열

  useEffect(() => {
    // +>분기처리, 불리언 값이 최초에 false
    count && alert(`변경된 숫자는 ${count}입니다.`); // +>리터럴?
  }, [count]); // +>화면이 최초 열렸을 때, 카운트 값이 변경되었을 때만 기능이 작동됨
  // +>useState가 훅으로서 컴포넌트의 생명주기가 컴포넌트가 닫힐 때 까지 값을 저장, 닫히고 다시 열면 값을 초기값으로 돌아가게 된다.

  return (
    <div className="w-80 h-52 border border-black-400 pt-16">
      <p>카운트:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <p className="font-mono text-xl">ChildComponent</p>
    </div>
  );
};
