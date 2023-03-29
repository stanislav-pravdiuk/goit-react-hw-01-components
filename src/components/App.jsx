import Profile from "./profile/Profile";
import data from './profile/user.json'

export default function App() {
  return (
    <div>
      {data.map(data =>
        <Profile
          key={data.tag}
          avatar={data.avatar}
          name={data.username}
          tag={data.tag}
          location={data.location}
          followers={data.stats.followers}
          views={data.stats.views}
          likes={data.stats.likes}
        />)}
  </div>)
}
