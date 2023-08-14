import { useState } from "react";
import LinkForm from "./components/LinkForm";
import Profile from "./components/Profile";
import Preview from "./components/Preview";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import * as Icons from './SvgImports'

function App() {

  const nameOfsites  = [
    {name: 'Codepen',icon: Icons.Codepen},
    {name: 'Codewars',icon: Icons.Codewars},
    {name: 'Facebook',icon: Icons.Facebook},
    {name: 'Freecodecamp',icon: Icons.Freecodecamp},
    {name: 'Frontend Mentor',icon: Icons.FrontendMentor},
    {name: 'Github',icon: Icons.Github},
    {name: 'Gitlab',icon: Icons.Gitlab},
    {name: 'Linkedin',icon: Icons.Linkedin},
    {name: 'Stack Overflow',icon: Icons.StackOverflow},
    {name: 'Twitch',icon: Icons.Twitch},
    {name: 'Twitter',icon: Icons.Twitter},
    {name: 'Youtube',icon: Icons.Youtube},
  ]

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
