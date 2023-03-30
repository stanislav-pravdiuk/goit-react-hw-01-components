import PropTypes from 'prop-types';
import StatisticsItem from "./StatisticsItem"

export default function StatisticsList({ items }) {
    return (
        <ul className="stat-list">
            {items.map(item => (
                <li key={item.id} className="item">
                    <StatisticsItem
                        title={item.title}
                        stats={item}
                    />
                </li>
            ))}
        </ul>
    )
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}