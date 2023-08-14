import { useState } from "react";
import { Link as LinkIcon } from "../SvgImports";

function Link({ count, setLinks, link, nameOfsites }) {
  const handleLinkChange = (e) => {
    const value = e.target.value;
    const prop = e.target.name;
    let obj = {};

    if (prop === "siteName") {
      let img = null,color = null;

      for (let i = 0; i < nameOfsites.length; i++) {
        if (nameOfsites[i].name === value) {
          img = nameOfsites[i].icon;
          color = nameOfsites[i].color;
          break;
        }
      }
      obj.siteName = value;
      obj.icon = img;
      obj.color = color;
    } else {
      obj.url = value;
    }
    
    setLinks((prev) => {
      return prev.map((item, index) => {
        if (index === count) {
          return {
            ...item,
            ...obj,
          };
        } else return item;
      });
    });

    setLinks((prev) => {
      return prev.map((item, index) => {
        if (index === count) {
          return {
            ...item,
            [prop]: value,
          };
        } else return item;
      });
    });
  };

  const RemoveLink = (e) => {
    e.preventDefault();
    setLinks((prev) => {
      return prev.filter((item, index) => {
        return index !== count;
      });
    });
  };

  return (
    <>
      <div className="Link">
        <div className="LinkTop">
          <h4>Link#{count + 1}</h4>
          <button onClick={RemoveLink}>Remove</button>
        </div>
        <div className="LinkInput LinkInputSite">
          <label htmlFor="siteName">Platform</label>
          <div className="InputContainer">
            <img src={link.icon} alt="current-icon" />
            <select
              name="siteName"
              value={link.siteName}
              onChange={handleLinkChange}
            >
              {nameOfsites.map((site, index) => {
                return (
                  <>
                    <option key={index} value={site.name}>
                      {site.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </div>

        <div className="LinkInput LinkInputUrl">
          <label htmlFor="url">Link</label>
          <div className="InputContainer">
            <span>
              <img src={LinkIcon} alt="link-icon" />
            </span>
            <input
              type="text"
              name="url"
              value={link.url}
              onChange={handleLinkChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Link;
