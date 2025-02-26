// +>부모에서 자식에게 전달할 때 사용
// +>유동적으로 값이 변경 될 수 있을 때 사용
// export const ChildComponent = (props) => {
export const ChildComponent = ({ title, content }) => {
    // console.log(props);
    return (
        <div className="card">
            <div>
                {/* <h2>{props.title}</h2>
                <p>{props.content}</p> */}
                <h2>{title}</h2>
                <p>{content}</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}