import Nav from "./Nav"
import { startNewWorkout } from "./requests/workout"
import { useState } from "react"
function Home() {
    const [workoutType, setWorkoutType] = useState("Workout Type")
    const [loading, setLoading] = useState(false)
    const [workoutSessionId, setworkoutSessionId] = useState(0)
    function handleChange(event) {
        setWorkoutType(event.target.value)
        console.log(event.target.value);
    }

    async function createWorkout() {
        if (workoutType == "Workout Type") {
            return
        }
        setLoading(true)
        const data = await startNewWorkout(workoutType)
        setLoading(false)
    }
    return (
        <>
            <Nav />
            <select defaultValue="Workout Type" onChange={handleChange}>
                <option value="Workout Type" disabled>Workout Type</option>
                <option value="push">push</option>
                <option value="pull">pull</option>
                <option value="legs">legs</option>
            </select>
            <div>
                <button aria-busy={loading} onClick={createWorkout}>Start New Workout</button>
            </div>
        </>
    )
}

export default Home