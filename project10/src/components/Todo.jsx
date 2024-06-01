
const Todo = (todoItems) => {
  console.log(todoItems);
  return (
    <>
    <div>
    <h1>to-do App</h1>
    {todoItems.todoItems.map((Todo) =>(

<p key={Todo.id} style={{color: Todo.isCompleted ? "green" :"red"}}>{<h4>{Todo.title} </h4>} {Todo.description}</p>
    ))}
    </div>
    </>
  )
}
export default Todo