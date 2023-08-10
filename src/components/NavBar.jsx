import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <>
            <div className="NavBar">
                <div className="NavLogo">
                    devLinks
                </div>
                <div className="NavLinks">
                    <ul>
                        <li>
                            <Link to="/links">Links</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
                <div className="PreviewPage">
                    <Link to="preview">Preview</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;