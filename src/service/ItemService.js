import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8085/loanEzz/api/products"

export const getAllItems = () => {
    return axios.get(
        BASE_REST_API_URL
    )
}


export function addItem(item) {
  return axios.post(
    BASE_REST_API_URL,
    item
  )
}
