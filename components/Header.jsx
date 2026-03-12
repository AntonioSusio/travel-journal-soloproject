export default function Header() {
    return(
        <header className="site-header flex">
            <div className="logo-container flex">
                <img src="./globe.png" className="logo-img" alt="site logo representing a globe" />
                <p className="logo-text">my travel journal</p> 
            </div>
        </header>
    )
}