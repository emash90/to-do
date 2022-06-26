import axios from "axios";

const API_URI = "https://emash-to-do.herokuapp.com/api/user/";
console.log(API_URI)

//register user

const register = async (userData) => {
    const response = await axios.post("https://emash-to-do.herokuapp.com/api/user/" + "register", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post("https://emash-to-do.herokuapp.com/api/user/" + "login", userData);

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
