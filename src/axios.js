import axios from "axios";

//base URL making requests from movie db
const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3"
});

export default instance;