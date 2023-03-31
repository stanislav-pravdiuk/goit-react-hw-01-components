import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './friendList.module.css'

function FriendList({ friends }) {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => ( 
                <li key={friend.id} className={css.item}>
                    <FriendListItem
                        props={friend}
                    />
                </li>
            ))}
        </ul>
    ) 
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}

export default FriendList

