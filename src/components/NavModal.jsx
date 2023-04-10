import { Link } from "react-router-dom"
function NavModal({ toggleNav }) {
    return (
        <dialog open>
            <article>
                <a
                    aria-label="Close"
                    className="close"
                    data-target="modal-example"
                    onClick={toggleNav}
                >
                </a>

                <div onClick={toggleNav}><Link to="/home">Home</Link></div>
                <div onClick={toggleNav}><Link to="/workout-history">Workout History</Link></div>
                <div onClick={toggleNav}><Link to="/weight-record">Weight Record</Link></div>

            </article>
        </dialog>
    )
}

export default NavModal