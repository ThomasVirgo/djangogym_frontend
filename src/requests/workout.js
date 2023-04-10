import axios from "axios";
import { generateAuthHeaders } from "./auth";

async function startNewWorkout(workoutType) {
    const config = { "headers": generateAuthHeaders() }
    const dateNow = new Date()
    const dateString = dateNow.toISOString()
    const url = "https://djangogym.onrender.com/api/gym/session/"
    const body = { "start_date": dateString, "workout_type": workoutType }
    const { data } = await axios.post(url, body, config)
    return data
}

async function getCurrentWorkout() {
    const config = { "headers": generateAuthHeaders() }
    const url = "https://djangogym.onrender.com/api/gym/session-ongoing"
    const { data } = await axios.get(url, config)
    if ("id" in data) {
        const start_date = new Date(data.start_date)
        const start_date_formatted = start_date.toDateString()
        data.start_date = start_date_formatted
        return data
    }
    return data
}

async function getWorkout(workout_session_id) {

}


export { startNewWorkout, getCurrentWorkout, getWorkout }