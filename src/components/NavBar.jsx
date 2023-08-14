import {NavLink} from 'react-router-dom'
import * as Icons from '../SvgImports';

function NavBar() {
    return(
        <>
            <div className="NavBar">
                <NavLink to='/' className="NavLogo">
                    <img className='NavLogoImg' src={Icons.LogoDevlinksSmall} alt="LogoDevlinksSmall" />
                    <h3 className='NavLogoText hide'>devLinks</h3>
                </NavLink>
                <div className="NavLinks">
                    <ul>
                        <li>
                            <NavLink to="/links">
                                <img className='NavLinksLogo' src={Icons.LinksHeader} alt="NavLinksLogo" />
                                <h3 className='NavLinksText hide' >Links</h3>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">
                                <img className='NavProfileLogo' src={Icons.ProfileDetailsHeader} alt="NavProfileLogo" />
                                <h3 className='NavProfileText hide'>Profile Details</h3>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="PreviewPage">
                    <NavLink to="/preview">
                        <img className='NavPreviewLogo' src={Icons.PreviewHeader} alt="NavPreviewLogo" />
                        <h3 className='NavPreviewText hide' >Preview</h3>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default NavBar;