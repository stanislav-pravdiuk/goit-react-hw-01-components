import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
    return (
        <ul class="friend-list">
            {friends.map(friend => <FriendListItem props={friend} />)}
        </ul>
    )
}

