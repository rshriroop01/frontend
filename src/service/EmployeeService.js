import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8085/loanEzz/api/employees"

export const getAllEmployees = () => {
    return axios.get(
        BASE_REST_API_URL
    )
}


export function addEmployee(employee) {
  return axios.post(
    BASE_REST_API_URL,
    employee
  )
}
