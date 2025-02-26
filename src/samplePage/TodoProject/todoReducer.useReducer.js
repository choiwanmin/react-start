// +>비즈니스 로직 이동
// +>상태관리의 편의성을 극대화할 때 리듀스사용
// +>가독성 우수
// +>리덕스 참고 리듀스를 기반으로한 기능능
export const todoReducer = (tasks, actions) => {
    switch (actions.type) {
        case 'add': {
            return [
                ...tasks,
                {
                    id: actions.id,
                    text: actions.text,
                    done: false,
                }
            ]
        }
        case 'change':{
            return tasks.map((t) => (t.id === actions.task.id ? actions.task : t));
        }
        case 'delete':{
            return tasks.filter((t) => t.id !== actions.id)
        }
    }
};