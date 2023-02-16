import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className="d-flex justify-content-center align-self-center">
            <Link type="button" className="btn btn-primary m-4" to={"/"}>Home</Link>
            <Link type="button" className="btn btn-primary m-4" to={"/form"}>Post</Link>
        </div>
    )
}

export default Navbar