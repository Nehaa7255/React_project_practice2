
const Todo = (todoItems) => {
  return (
    <>
    <div>
    <h1>to-do</h1>
    {todoItems.map((Todo) =>(
        <heading>{Todo.items}</heading>
<p>{Todo.description}</p>


    ))}

    </div>
    </>
  )
}

export default Todo