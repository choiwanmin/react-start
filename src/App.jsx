import { useState } from "react"
import { Button } from "./samplePage/Button.usestate"
import { ChildComponent } from "./samplePage/ChildComponent.props"
import { ParantComponent } from "./samplePage/Hook.useEffect/ParentComponent"
import { Input } from "./samplePage/input.useRef"
import { HeavyJobComponent, HeavyJobComponent2, MemoHeavyJobComponent, MemoHeavyJobComponent2 } from "./samplePage/MemoComponent.React.Memo"
import { MemoComponent } from "./samplePage/MemoComponent.useMemo"
import { SelectBox } from "./samplePage/SelectBox.usestate"
import { Table } from "./samplePage/Table"

function App() {
  const [plusNum, setPlusNum] = useState(0); // +>유동적으로 변화에 사용하고자
  const [multiNum, setMultiNum] = useState(0);

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
      <input type="number" onChange={(e) => setPlusNum(e.target.value)} />
      {/* <HeavyJobComponent num={Number(plusNum)} /> */}
      <MemoHeavyJobComponent num={Number(plusNum)} />
      <input type="number" onChange={(e) => setMultiNum(e.target.value)} />
      {/* <HeavyJobComponent2 num={Number(multiNum)} /> */}
      <MemoHeavyJobComponent2 num={Number(multiNum)}/>
    </>
  )
}

export default App
