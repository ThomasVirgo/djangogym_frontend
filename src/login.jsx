import { useState } from "react"
import { signIn } from "./requests/auth"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function attemptLogin(event) {
        event.preventDefault()
        setLoading(true)
        const data = await signIn(username, password)
        if ("token" in data) {
            navigate("/home")
        } else {
            setPassword("")
        }
        setLoading(false)

    }

    function handleUsername(event) {
        setUsername(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }



    return (
        <>
            <div className="container">
                <article className="grid">
                    <div>
                        <hgroup>
                            <h1>DjangoGym</h1>
                            <h2>Sign in</h2>
                        </hgroup>
                        <form onSubmit={attemptLogin}>
                            <input
                                onChange={handleUsername}
                                value={username}
                                type="text"
                                name="login"
                                placeholder="username"
                                aria-label="username"
                                required
                            />
                            <input
                                onChange={handlePassword}
                                value={password}
                                type="password"
                                name="password"
                                placeholder="Password"
                                aria-label="Password"
                                required
                            />
                            <button type="submit" aria-busy={loading} className="contrast">Login</button>
                        </form>
                    </div>
                    <div><img src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b"></img></div>
                </article>
            </div>
        </>
    )
}

export default LoginPage