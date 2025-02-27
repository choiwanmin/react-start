import { useMemo, useState } from "react";

// 10,000개의 데이터를 만드는 중
const generateData = () => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 1000), // 0~999 랜덤 숫자
  }));
};

const data = generateData();

export const MemoComponent = () => {
  const [search, setSearch] = useState("");

  const filteredDataCount = () => {
    console.log("검색 결과 개수를 계산 중....");
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ).length; // +>만개의 데이터에서 찾아와서 길이를 구함
  };

  const filterDaataCountMemo = useMemo(() => {
    console.log("useMemo를 사용해서 검색 결과를 계산 중...");
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ).length;
  }, [search]); // +>메모화하여, 값을 기억, 불필요한 동작을 최소화, 함수에 대한 결과값, 필요할 떄만 사용, search라는 값이 변경되지 않는 이상 최초 값을 갖고 있음음
  // +>컴포넌트도 함수 즉 메모화제이션 가능

  return (
    <div>
      <h2>useMemo</h2>
      <input
        type="number"
        placeholder="검색어 입력..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>검색 결과 개수: {filterDaataCountMemo} 개</p>
      <br />
      <p> {filterDaataCountMemo} 개의 결과로 무엇을 할 예정인가요?</p>
    </div>
  );
};
