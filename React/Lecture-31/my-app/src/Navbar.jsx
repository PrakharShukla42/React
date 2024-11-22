import "./css/style.css";

function Navbar() {
    return (
        <div className="nav-bar">
            <h1>Prakhar Shukla</h1>
            <div className="link">
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Github</a>
                <a href="#">Linkedin</a>
                <button id="btn">Leetcode</button>
            </div>
        </div>
    );
}
  export default Navbar;