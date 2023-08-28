import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8085/loanEzz/api/purchased-items/"

export function getAllEmpItems(employee) {
  return axios.get(
    BASE_REST_API_URL + `${employee}`
  );
}
