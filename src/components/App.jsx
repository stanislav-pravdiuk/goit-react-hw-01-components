import Profile from "./profile/Profile";
import Section from "./statistics/Section";
import StatisticsList from "./statistics/StatisticsList";
import user from './profile/user.json';
import data from './statistics/data.json';

export default function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Section>
        <StatisticsList
          items={data}
        />
      </Section>
      
    </div>
  )
} 