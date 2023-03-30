import PropTypes from 'prop-types';

function FriendListItem(props) {
    const {
        avatar,
        name,
        isOnline
    } = props
    return (
        <li key={id} class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem