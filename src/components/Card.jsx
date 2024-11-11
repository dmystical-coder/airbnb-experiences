import Star from '../assets/star.svg'
import Middot from '../assets/middot.svg'
import Image from '../assets/image.png'

const Card = () => {
    return (
        <div className="card">
            <img src={Image} alt="Katie Zaferes" className="card__image" />
            <div className="card__stats">
                <img src={Star} alt="Star icon" />
                <span className="stats-rating">5.0
                </span>
                <span className="stats-review">(6)</span>
                <img src={Middot} alt="Middot" />
                <span className="stats-country">USA</span>
            </div>
            <h2 className="card__title">
                Life lessons with Katie Zaferes
            </h2>
            <p className="card__text">
                <span className="text-bold">From $136</span> / person
            </p>
        </div>
    )
}

export default Card