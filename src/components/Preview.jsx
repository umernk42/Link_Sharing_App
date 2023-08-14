
function Preview({ links, profile }) {


    return (
        <>
            <div className="preview">
                <div className="previewProfilePic">
                    <img src={profile.profilePic} alt="" style={{ width: 50, height: 50 }} />
                </div>
                <div className="previewFullName">
                    <h2>{profile.firstName} {profile.lastName}</h2>
                </div>
                <div className="previewEmail">
                    <h3>{profile.email}</h3>
                </div>

                {
                    links.map((link,index) =>
                    (<div key={index} className="previewLink">

                        <a href={link.url}>{link.siteName}</a>
                    </div>)
                    )
                }
            </div>
        </>
    )
}

export default Preview;