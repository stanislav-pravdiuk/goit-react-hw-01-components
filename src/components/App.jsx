import Profile from "./profile/Profile";
import user from './profile/user.json'
import Statistics from "./statistics/Statistics";
import data from './statistics/data.json'

export default function App() {
  return (
    <div>
      {<Profile
          key={user.tag}
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />}
      {<Statistics
          stats={data}
        />}
    </div>
  )
}
