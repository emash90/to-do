import axios from "axios";

const API_URI = "https://lets-to-do.herokuapp.com/api/user/";

//register user

const register = async (userData) => {
    const response = await axios.post(API_URI + "register", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post(API_URI + "login", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};
const authService = {
    register,
    login,
    logout,
};
export default authService;
