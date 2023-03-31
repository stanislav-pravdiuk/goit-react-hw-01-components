import PropTypes from 'prop-types';

function FriendListItem(props) {
    const {
        avatar,
        name,
        isOnline
    } = props
    return (
        <div>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div>
    ) 
}

FriendListItem.propTypes = {
    props: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
}

export default FriendListItem