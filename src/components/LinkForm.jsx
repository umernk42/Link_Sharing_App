import React from "react";
import Link from "./Link";
import Preview from "./Preview";

function LinkForm({ profile,links, setLinks, nameOfsites }) {

    const addClickHandle = () => {
        const newLink = {
            siteName: nameOfsites[0],
            url: ''
        }
        setLinks(prev => {
            return [...prev, newLink]
        })
    }

    return (
        <>
            <button onClick={addClickHandle} >Add New Link</button>
            <form>

                {links.map((link, index) => {
                    return (<Link key={index} count={index} setLinks={setLinks} link={link} nameOfsites={nameOfsites} />)
                })}
            </form>
            <Preview links={links} profile={profile} />
        </>
    )
}

export default LinkForm;