const backend = `https://react.axilis.com/fcar/`;

const paths = {
    fetchTodos: backend + 'todos',
    addTodo: backend + 'todo',
    deleteTodo: (id) => backend + `todo/${id}`,
    updateDoneStatus: backend + 'todo'
}

export default paths;