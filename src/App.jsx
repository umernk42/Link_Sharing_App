import { useState } from "react";
import LinkForm from "./components/LinkForm";
import Profile from "./components/Profile";
import Preview from "./components/Preview";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const nameOfsites = [
    "GitHub",
    "LinkedIN",
    "Gmail",
    "CodePen",
    "CodeWars",
    "Facebook",
    "freeCodeCamp",
    "frontEndMentor",
    "GitLab",
    "Twitter",
  ];

  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({
    profilePic: null,
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/links"
          element={
            <LinkForm
              links={links}
              setLinks={setLinks}
              nameOfsites={nameOfsites}
              profile={profile}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile links={links} profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/preview"
          element={<Preview links={links} profile={profile} />}
        />
      </Routes>
      {/* <LinkForm links={links} setLinks={setLinks} nameOfsites={nameOfsites} />
      <Profile profile={profile} setProfile={setProfile} />
      <Preview links={links} profile={profile} /> */}
    </>
  );
}

export default App;
