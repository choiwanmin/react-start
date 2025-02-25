import { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(5);
    return (
        <>
          <button onClick={()=>setCount((prev) => prev + 1)}>클릭</button>
          {/* 이전 상태의 값이 중요할 때, 이전 상태의 값을 가지고 있음, 콜백함수 사용하여 이전 상태 값에 1이 더해지도록, 이전 상태 값에 변화를 주고 싶을 때 */}
          <br />
          count : {count}
        </>
    )
}