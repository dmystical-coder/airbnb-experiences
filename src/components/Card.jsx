import Star from '../assets/star.svg'
import Middot from '../assets/middot.svg'
import PropTypes from 'prop-types';

const Card = ({ img, rating, reviews, country, title, text }) => {
    return (
        <div className="card">
            <img src={img} alt={title} className="card__image" />
            <div className="card__stats">
                <img className='stats-rating-star' src={Star} alt="Star icon" />
                <span className="stats-rating">{rating}
                </span>
                <span className="stats-review">({reviews})</span>
                <img src={Middot} alt="Middot" />
                <span className="stats-country">{country}</span>
            </div>
            <h2 className="card__title">
                {title}
            </h2>
            <p className="card__text">
                <span className="text-bold">{text}</span> / person
            </p>
        </div>
    )
}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Card