import React, { useEffect } from "react";

// +>리액트 메모화제이션을 통해 전체 컴포넌트가 랜더링되는 것을 방지, 굳이 다시 만들 필요가 없어짐?
// +>리액트 - 랜더링 -메모화 => 최적화가 목적
// export const HeavyJobComponent = ({ num }) => {
export const HeavyJobComponent = ({ num, numObj }) => {
    useEffect(() => {
        console.log("HeavyJobConponent 랜더링");
    // })
    }, [])

    useEffect(() => {
        console.log("num이 바뀌면 heavyPlus가 실행이 되요");
        heavyPlus();
    // }, [num])
    }, [numObj])

    const heavyPlus = () => {
        let total = 0;
        for(let i = 0; i < 123456; i++) {
            // total += num;
            total += numObj.num;
        }
        // return total + num;
        return total + numObj.num;
    }
    
    const result = heavyPlus();

    return (
        <p>"{num}"를 더해서 만든 연산 결과는 <b>{result}</b> 입니다!</p>
    )
}

export const HeavyJobComponent2 = ({num}) => {
    useEffect(() => {
        console.log("HeavyJobConponent2 랜더링");
    })

    useEffect(() => {
        console.log("num이 바뀌면 heavyMulti가 실행이 되요");
        heavyMulti();
    }, [num])

    const heavyMulti = () => {
        let total = 0;
        for(let i = 0; i < 123456; i++) {
            total += num;
        }
        return total * num;
    }
    
    const result = heavyMulti();

    return (
        <p>"{num}"를 더해서 만든 연산 결과는 <b>{result}</b> 입니다!</p>
    )
}

export const MemoHeavyJobComponent = React.memo(HeavyJobComponent);
export const MemoHeavyJobComponent2 = React.memo(HeavyJobComponent2);