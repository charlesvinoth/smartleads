import { axios } from './axios'

export async function getTodos(page = 1) {
  const _response = {
    data: [],
    error: ''
  }

  try {
    const response = await axios.post('', {
      query: `{
          todos(options: { 
            paginate: { page: ${page}, limit: 10 } 
            sort: { field: "id", order: ASC }
          }) {
            data {
              id
              title
              completed
            }
          }
        }`
    })
    const { status, data } = response

    if (status !== 200) {
      throw response
    }

    _response.data = data.data.todos.data
  } catch (e) {
    console.error(e)
    _response.error = 'error fetching todos'
  }

  return _response
}

export async function addTodo(title) {
  const _response = {
    data: '',
    error: ''
  }

  try {
    const response = await axios.post('', {
      query: `
        mutation {
          createTodo(input:{title: "${title}", completed: true}) {
            id
          }
        }`
    })
    const { status, data } = response

    if (status !== 200) {
      throw response
    }

    _response.data = data.data.createTodo.id
  } catch (e) {
    console.error(e)
    _response.error = 'error creating todo'
  }

  return _response
}

export async function updateTodo(id, completed) {
  const _response = {
    data: '',
    error: ''
  }

  try {
    const response = await axios.post('', {
      query: `
        mutation {
          updateTodo(id: ${id}, input: { completed: ${completed} }) {
            id
          }
        }`
    })
    const { status, data } = response

    if (status !== 200) {
      throw response
    }

    _response.data = data.data.updateTodo.id
  } catch (e) {
    console.error(e)
    _response.error = 'error updating todo'
  }

  return _response
}
