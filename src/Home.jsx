import Nav from "./Nav"
import { startNewWorkout, getCurrentWorkout } from "./requests/workout"
import { useState, useEffect } from "react"
function Home() {
    const [workoutType, setWorkoutType] = useState("Workout Type")
    const [loading, setLoading] = useState(false)
    const [workoutSessionId, setworkoutSessionId] = useState(0)
    const [workoutSessionData, setworkoutSessionData] = useState({})

    useEffect(() => {
        async function getCurrentWorkoutOrNone() {
            const data = await getCurrentWorkout()
            if ("id" in data) {
                setworkoutSessionId(data.id)
                setworkoutSessionData(data)
            } else {
                return
            }
        }
        getCurrentWorkoutOrNone()
    }, [])


    // useEffect(() => {

    // }, [workoutSessionId])

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
        setworkoutSessionId(data["workout_session_id"])
        setLoading(false)
    }


    return (
        <>
            <Nav />
            {workoutSessionId == 0 && <>
                <select defaultValue="Workout Type" onChange={handleChange}>
                    <option value="Workout Type" disabled>Workout Type</option>
                    <option value="push">push</option>
                    <option value="pull">pull</option>
                    <option value="legs">legs</option>
                </select>
                <div>
                    <button aria-busy={loading} onClick={createWorkout}>Start New Workout</button>
                </div>
            </>}

            {workoutSessionId != 0 && <>
                <details>
                    <summary role="button">{workoutSessionData.start_date} - <strong>{workoutSessionData.workout_type}</strong> workout</summary>
                    <p>…</p>
                </details>
            </>}

        </>
    )
}

export default Home