import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState({})
  useEffect(() => {

  }, [])

  const handleTextChange = (e) => {
    const userName = e.target.value
    setUserName(userName)
  }

  const getUserProfile = () => {
    fetch(`https://api.github.com/users/${userName}`).then(
      res => res.json()).then(result => setUserData({ ...result }))
  }

  const handleSearch = () => {
    getUserProfile()
  }
  return (
    <>
      <div className="App container">
        <h1>Github Profile Finder</h1>
        <div className='search-bar-container'>
          <input autoFocus required placeholder='Type username' className='search-bar' type="text" onChange={handleTextChange} />
          <button type='submit' className='default-btn' onClick={getUserProfile}>
            {" "}
            Search{" "}
          </button>
        </div>
        {userData.name ?
          <>
            <div className='profile-container'>
              <img src={userData.avatar_url} alt="avatar_url" />
              <section>
                <p><span>Name: </span>{userData.name}</p>
                <p><span>Address: </span>{userData.location}</p>
                <p><span>Bio: </span>{userData.bio}</p>
                <p><span>Profile url: </span>
                  <a href={userData.html_url} target='_blank'>{userData.html_url}</a>
                </p>
                <p><span>Blog: </span>
                  <a href={userData.blog} target='_blank'>{userData.blog}</a>
                </p>
              </section>
            </div>
          </>
          : <p>user not found</p>
        }
      </div>
    </>
  );
}

export default App;
