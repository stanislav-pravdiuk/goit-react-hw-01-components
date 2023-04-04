import PropTypes from 'prop-types';
import StatisticsItem from "./StatisticsItem";
import css from './statistics.module.css';
import color from './getRandomHexColor';

export default function StatisticsList({ items }) {
    return (
        <ul className={css.stat__list}>
            {items.map(item => (
                <li key={item.id} className={css.item}
                    style={{
        margin: 8,
        borderRadius: 4,
                        backgroundColor: color(),
        
      }}>
                    <StatisticsItem
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