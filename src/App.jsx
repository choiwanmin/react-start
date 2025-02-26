import { useMemo, useState } from "react"
import { Button } from "./samplePage/Button.usestate"
import { ChildComponent } from "./samplePage/ChildComponent.props"
import { ParantComponent } from "./samplePage/Hook.useEffect/ParentComponent"
import { Input } from "./samplePage/input.useRef"
import { HeavyJobComponent, HeavyJobComponent2, MemoHeavyJobComponent, MemoHeavyJobComponent2 } from "./samplePage/MemoComponent.React.Memo"
import { MemoComponent } from "./samplePage/MemoComponent.useMemo"
import { SelectBox } from "./samplePage/SelectBox.usestate"
import { Table } from "./samplePage/Table"
import { TodoMain } from "./samplePage/TodoProject/TodoMain"

function App() {
  const [plusNum, setPlusNum] = useState(0); // +>유동적으로 변화에 사용하고자
  const [multiNum, setMultiNum] = useState(0);

  // 객체를 memo 시킨다.
  const memoNum = useMemo(() => ({num: Number(plusNum)}), [plusNum]); // +>앞서서는 프롭스로 넘겼지만 여기서는 객체 자체를 메모에 감싸서 넘어감, 메모화제이션을 활용

  return (

    <>
      {/* <Button /> */}
      {/* <Input /> */}
      {/* <SelectBox /> */}
      
      {/* <Table /> */}
      {/* <ParantComponent /> */}
      {/* <MemoComponent /> */}
      {/* <ChildComponent title={"제목1"} content={"내용을 작성해요."} />
      <ChildComponent title={"제목2"} content={"내용을 입력해요."}/>
      <ChildComponent title={"제목2"} content={"내용을 입력해요."}/>
      <ChildComponent title={"제목4"} content={"내용을 입력해요."}/>
      <ChildComponent title={"제목5"} content={"내용을 입력해요."}/>
      <ChildComponent title={"제목6"} content={"내용을 입력해요."}/>
      <ChildComponent title={"제목7"} content={"내용을 입력해요."}/>
      <ChildComponent title={"제목8"} content={"내용을 입력해요."}/> */}
      
      {/* <input type="number" onChange={(e) => setPlusNum(e.target.value)} /> */}
      {/* <HeavyJobComponent num={Number(plusNum)} numObj={{num: Number(plusNum)}}/> */}
      {/* <HeavyJobComponent num={Number(plusNum)} numObj={memoNum}/> */}
      {/* +>numObj={{num: Number(plusNum)} 새로운 객체 새로운 주소값을 생성 -> 객체로 전달됨 -> 주소값을 전달 -> 재랜더링을 막을 수 없음 - 메모화제이션으로 해결될 문제가 아님 */}
      {/* <MemoHeavyJobComponent num={Number(plusNum)} /> */}
      {/* <input type="number" onChange={(e) => setMultiNum(e.target.value)} /> */}
      {/* <HeavyJobComponent2 num={Number(multiNum)} /> */}
      {/* <MemoHeavyJobComponent2 num={Number(multiNum)}/> */}
      <TodoMain />
    </>
  )
}

export default App
