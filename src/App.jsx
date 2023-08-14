import { useState } from "react";
import LinkForm from "./components/LinkForm";
import Profile from "./components/Profile";
import Preview from "./components/Preview";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import * as Icons from './SvgImports'
import Home from "./components/Home";

function App() {

  const nameOfsites  = [
    {name: 'Codepen',icon: Icons.Codepen,color: '#FFFFFF'},
    {name: 'Codewars',icon: Icons.Codewars,color:'#8A1A50'},
    {name: 'Facebook',icon: Icons.Facebook,color:'#2442AC'},
    {name: 'Freecodecamp',icon: Icons.Freecodecamp,color:'#302267'},
    {name: 'Frontend Mentor',icon: Icons.FrontendMentor,color:'#FFFFFF'},
    {name: 'Github',icon: Icons.Github,color:'#1A1A1A'},
    {name: 'Gitlab',icon: Icons.Gitlab,color:'#EB4925'},
    {name: 'Linkedin',icon: Icons.Linkedin,color:'#2D68FF'},
    {name: 'Stack Overflow',icon: Icons.StackOverflow,color:'#EC7100'},
    {name: 'Twitch',icon: Icons.Twitch,color:'#EE3FC8'},
    {name: 'Twitter',icon: Icons.Twitter,color:'#43B7E9'},
    {name: 'Youtube',icon: Icons.Youtube,color:'#EE3939'},
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
        <Route path='/' element={<Home />}/>
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
