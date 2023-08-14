import { ArrowRight } from "../SvgImports";
import { NavLink } from "react-router-dom";

function Preview({ links, profile }) {
  return (
    <>
      <div className="Preview">
        <div className="PreviewTopBtns">
          <NavLink to='/' className="BackBtn">Back to Editor</NavLink>
          <button className="ShareLink">Share Link</button>
        </div>

        <div className="PreviewProfilePic">
          <img src={profile.profilePic} alt="" />
        </div>

        <div className="PreviewFullName">
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>
        </div>
        <div className="PreviewEmail">
          <h3>{profile.email}</h3>
        </div>

        {links.map((link, index) => {
          console.log(link);
          return (
            <div key={index} className="previewLink">
              <a href={link.url} style={{backgroundColor: link.color}}>
                <div>
                  <img src={link.icon} alt="" className="LinkIcon" />
                  <p>{link.siteName}</p>
                </div>
                <img src={ArrowRight} alt="" className="ArrowRight" />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Preview;
