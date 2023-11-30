export const Task = (props) => {

    return <div>
        <h1 style={{ color: props.completed ? "green" : "red" }}>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.taskId)}> X </button>
        <button onClick={() => props.changeStatus(props.taskId)}>Complete</button>
    </div>

}