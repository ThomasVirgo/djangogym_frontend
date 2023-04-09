import axios from "axios";

async function signIn(username, password) {
    const body = { username, password }
    const { data } = await axios.post("https://djangogym.onrender.com/api/auth/signin", body)
    if ("token" in data) {
        localStorage.setItem("token", data.token)
    }
    return data
}


export { signIn }