

function Profile({ profile, setProfile }) {

    const handleImageUpload = (e) => {
        const file = e.target.files[0]; // Get the selected file

        if (file) {
            // Convert the selected file to a data URL
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = event.target.result;
                setProfile(prev => ({
                    ...prev,
                    profilePic: img
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProfileChange = (e) => {
        const value = e.target.value;
        const prop = e.target.name;

        setProfile(prev => {
            return {
                ...prev,
                [prop]: value
            }
        })
    }

    return (
        <>
            <div className="profile">
                <form>
                    <h2>Profile</h2>
                    <label htmlFor="profilePic">Profile Pic</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageUpload} />
                    {profile.profilePic && <img src={profile.profilePic} alt="Selected" style={{ width: '100px' }} />}

                    <label htmlFor="firstName">First Name </label>
                    <input type="text" name="firstName" value={profile.firstName} onChange={handleProfileChange} />

                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" name="lastName" value={profile.lastName} onChange={handleProfileChange} />

                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" value={profile.email} onChange={handleProfileChange} />

                </form>
            </div>
        </>
    )
}

export default Profile;