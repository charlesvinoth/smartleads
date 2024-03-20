import axios from 'axios'

const _axios = axios.create({
  baseURL: 'https://graphqlzero.almansi.me/api'
})

export { _axios as axios }
