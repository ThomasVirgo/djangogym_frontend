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


export { startNewWorkout }