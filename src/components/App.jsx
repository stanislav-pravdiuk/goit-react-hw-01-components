import Profile from "./profile/Profile";
import Section from "./statistics/Section";
import StatisticsList from "./statistics/StatisticsList";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';

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

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        props={transactions}
      />
    </div>
  )
}