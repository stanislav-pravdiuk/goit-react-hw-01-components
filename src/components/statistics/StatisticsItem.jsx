import PropTypes from 'prop-types';

export default function StatisticsItem(props) {
    const {
      stats
    } = props
  return (
      <div>
        <span className="label">{stats.label} </span>
        <span className="percentage">{stats.percentage}%</span>
      </div>
    )
}


StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
}