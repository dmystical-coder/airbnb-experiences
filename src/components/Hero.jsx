import HeroImage from '../assets/hero-img.png';

const Hero = () => {
    return (
        <div className="hero">
            <img src={HeroImage} alt="Experiences grid" className="hero__image" />
            <div className="hero__content">
                <h1 className="hero__content__heading">
                    Online Experiences
                </h1>
                <p className="hero__content__para">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero;