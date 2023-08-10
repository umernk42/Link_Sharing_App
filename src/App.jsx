import { useState } from 'react';
import LinkForm from './components/LinkForm';
import Profile from './components/Profile';
import Preview from './components/Preview';

function App() {

  const nameOfsites = ['GitHub','LinkedIN','Gmail','CodePen','CodeWars','Facebook',
                      'freeCodeCamp','frontEndMentor','GitLab','Twitter'];
  
  const [links, setLinks] = useState([]);
  const [profile,setProfile] = useState({
    profilePic: null,
    firstName: '',
    lastName: '',
    email: ''
    });

  return (
    <>
      <LinkForm links={links} setLinks={setLinks} nameOfsites={nameOfsites} />
      <Profile profile={profile} setProfile={setProfile} />
      <Preview links={links} profile={profile} />
    </>
  )
}

export default App
