import { useEffect, useState } from "react";
import tableData from "../common/tableData";

export const Table = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  // console.log(tableData);

  //체크박스 전체 선택
  const handleAllCheck = (checked) => {
    // 1.전체 선택 체크박스가 눌렸는지에 대한 정보를 가져와야합니다.
    // console.log(checked);
    if (checked) {
      const idArray = [];
      // 전체 선택을 하는 경우, tableData의 id 값들을 checkedItems에 배열 형태로 저장
      tableData.forEach((el) => {
        idArray.push(el.id);
      });
      // console.log(idArray);
      setCheckedItems(idArray);
    } else {
      //전체 선택 해제 시, checkedItems을 빈 배열로 만든다
      setCheckedItems([]);
    }
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 각가의 체크 박스가 선택이 되는 경우, checkedItems에 추가가 됩니다.
      setCheckedItems((prev) => [...prev, id]);
      // +>요소 값만 빼와서 새로운 주소의 배열에 기존 배열의 요소값을 복사하여 담기 위한 방법
    } else {
      //체크가 해제 되면, 체크된 아이템을 제외한 배열
      setCheckedItems(checkedItems.filter((el) => el !== id));
      // +>filter 함수는 새로운 주소값에 새로운 배열을 만들어주는 역할
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              {/* <input type='checkbox' onChange={(e) => console.log(e)}/> target.checked 확인이 가능*/}
              <input
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={
                  checkedItems.length === tableData.length ? true : false
                }
              />
            </th>
            <th>제목</th>
            <th>내용</th>
            <th>만든 날짜</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>
                  <input
                    type="checkbox"
                    value={data.id}
                    checked={checkedItems.includes(data.id) ? true : false}
                    onChange={(e) =>
                      handleSingleCheck(e.target.checked, data.id)
                    }
                  />
                  {/* +>includes 우리가 원하는 값이 들어가 있는지 확인 */}
                </td>
                {/* +>key자리에 인덱스 사용은 권장하지 않음, 변경될 가능성이 존재, 고유값 추천 */}
                <td>{data.title}</td>
                <td>{data.date}</td>
                <td>{data.content}</td>
              </tr>
            );
          })}
        </tbody>
        {checkedItems.length} 개가 선택되었습니다.
      </table>
    </>
  );
};
