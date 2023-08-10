import React from "react";
import Link from "./Link";

function LinkForm({ links, setLinks, nameOfsites }) {

    const addClickHandle = () => {
        const newLink = {
            siteName: '',
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
        </>
    )
}

export default LinkForm;