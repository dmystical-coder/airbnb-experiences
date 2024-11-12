import Star from '/assets/star.svg'
import Middot from '/assets/middot.svg'
import PropTypes from 'prop-types'

const Card = ({ card }) => {
    const { coverImg, stats, location, title, price, openSpots } = card
    let badgeText
    if (openSpots === 0) {
        badgeText = 'Sold Out'
    }
    else if (location === 'Online') {
        badgeText = 'Online'
    }
    return (
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img src={coverImg} alt={title} className="card__image" />
            <div className="card__stats">
                <img className='stats-rating-star' src={Star} alt="Star icon" />
                <span className="stats-rating">{stats.rating}
                </span>
                <span className="stats-review">({stats.reviewCount})</span>
                <img src={Middot} alt="Middot" />
                <span className="stats-country">{location}</span>
            </div>
            <h2 className="card__title">
                {title}
            </h2>
            <p className="card__text">
                <span className="text-bold">From ${price}</span> / person
            </p>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        coverImg: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            rating: PropTypes.number.isRequired,
            reviewCount: PropTypes.number.isRequired
        }).isRequired,
        location: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        openSpots: PropTypes.number.isRequired
    }).isRequired
}

export default Card