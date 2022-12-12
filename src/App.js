import user from './components/profile/user.json';
import './App.css';

import Profile from './components/profile/Profile';
import './components/profile/profile.css';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
