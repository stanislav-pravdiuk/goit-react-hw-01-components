import PropTypes from 'prop-types';
import css from './statistics.module.css'

export default function Section({ title, children }) {
    return (
        <section className="statistics">
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}