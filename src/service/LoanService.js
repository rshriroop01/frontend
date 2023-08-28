import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8085/loanEzz/api/loans"

export const getAllLoans = () => {
    return axios.get(
        BASE_REST_API_URL
    );
};

