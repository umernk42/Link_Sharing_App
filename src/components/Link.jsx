import { useState } from "react";

function Link({ count, setLinks, link, nameOfsites }) {

    const handleLinkChange = (e) => {
        const value = e.target.value;
        const prop = e.target.name;
        setLinks(prev => {
            return prev.map((item, index) => {
                if (index === count) {
                    return {
                        ...item,
                        [prop]: value,
                    }
                }
                else return item;
            })
        })

    }

    const RemoveLink = (e) => {
        e.preventDefault();
        setLinks(prev => {
            return prev.filter((item, index) => {
                return index !== count;
            });
        });
    }

    return (
        <>
            <div className="link">
                <h2>Link#{count + 1}</h2>

                <label htmlFor="siteName">Name of Site</label>
                <select name="siteName" onChange={handleLinkChange}>  
                    {
                        nameOfsites.map((site,index) => (<option key={index} value={site}>{site}</option>))
                    }
                </select>

                <label htmlFor="url">URL</label>
                <input type="text" name="url" value={link.url} onChange={handleLinkChange} />
                <button onClick={RemoveLink}>Remove</button>
            </div>
        </>
    )
}

export default Link;