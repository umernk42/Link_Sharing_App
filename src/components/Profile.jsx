import { useState } from "react";
import Preview from "./Preview";
import { UploadImage } from "../SvgImports";

function Profile({ links, profile, setProfile }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (file) {
      // Convert the selected file to a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(event.target);
        const img = event.target.result;
        setProfile((prev) => ({
          ...prev,
          profilePic: img,
        }));
      };
      console.log("hello world");
      reader.readAsDataURL(file);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleProfileChange = (e) => {
    const value = e.target.value;
    const prop = e.target.name;

    setProfile((prev) => {
      return {
        ...prev,
        [prop]: value,
      };
    });
  };

  return (
    <>
      <div className="Profile">
        <form>
          <div className="ProfileTop">
            <h2>Profile Details</h2>
            <p>Add your details to create a personal touch to your profiles</p>
          </div>

          <div className="ProfilePic">
            <p>Profile Picture</p>
            <div className="ProfileImg">
              {profile.profilePic && (
                <img className="ActualImage" src={profile.profilePic} alt="" />
              )}

              <img className="UploadImage" src={UploadImage} alt="uploadImg" />
              <p>+ Upload Image</p>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <p className="UploadInst">
              Images must be below 1024x1024px. Use PNG, JPG, or BMP format
            </p>
          </div>

          <div className="ProfileOtherDetails">
            <div className="Input-Field firstName">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
              />
            </div>

            <div className="Input-Field lastName">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
              />
            </div>

            <div className="Input-Field email">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </div>
          </div>
        </form>
      </div>
      <hr />
      {windowWidth > 768 && <Preview links={links} profile={profile} />}
    </>
  );
}

export default Profile;
