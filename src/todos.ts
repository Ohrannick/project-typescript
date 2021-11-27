export const getTodosByCount = (count: number) => {
  const requestTodo = 'https://jsonplaceholder.typicode.com/todos/'
  for (let i=1; i<=count; i++) {
    fetch(`${requestTodo}${i}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
