import user from './components/data/user.json';
import './App.css';

import Profile from './components/Profile/Profile';
import './components/Profile/profile.css';

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
