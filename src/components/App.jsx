import Profile from "./profile/Profile";
import user from './profile/user.json'
import StatisticsList from "./statistics/StatisticsList";
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
      {<section className="statistics">
        <StatisticsList
          items={data}
        />
      </section>}
      </div>
  )
}

