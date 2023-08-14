import React,{useState} from "react";
import Link from "./Link";
import Preview from "./Preview";

function LinkForm({ profile, links, setLinks, nameOfsites }) {
  const addClickHandle = () => {
    const newLink = {
      siteName: nameOfsites[0].name,    
      url: "",
      icon: nameOfsites[0].icon
    };
    setLinks((prev) => {
      return [...prev, newLink];
    });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <div className="LinkForm">
        <div className="LinkFromTop">
          <h2>Customize your links</h2>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="LinkFromButton">
          <button onClick={addClickHandle}>+ Add New Link</button>
        </div>
        <form>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                count={index}
                setLinks={setLinks}
                link={link}
                nameOfsites={nameOfsites}
              />
            );
          })}
        </form>
        {windowWidth > 768 && (<Preview links={links} profile={profile} />)}
      </div>
    </>
  );
}

export default LinkForm;
