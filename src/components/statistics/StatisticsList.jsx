import PropTypes from 'prop-types';
import StatisticsItem from "./StatisticsItem";
import css from './statistics.module.css';
import color from './getRandomHexColor';

export default function StatisticsList({ stats, title }) {
    return (
        <div>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat__list}>
                {stats.map(item => (
                    <li
                        key={item.id}
                        className={css.item}
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
        </div>
    )
}

StatisticsList.propTypes = {
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        parcentage: PropTypes.number.isRequired
    }),
    title: PropTypes.string
}