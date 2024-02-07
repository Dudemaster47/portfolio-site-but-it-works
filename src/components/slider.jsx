import "./slider.css"
import { Link } from "react-router-dom";

const Slider = ({ images, active, setActive }) => {
    const onNext = () => {
        if (active < images.length - 1) {
            setActive(active + 1);
        }
    };

    const onPrev = () => {
        if (active > 0) {
            setActive(active - 1);
        }
    };

    return (
        <div className="slider">
            <div className="slides">
                {images.map((e, i) => (
                    <Slide key={e.caption} {...e} active={i === active} />
                ))}
            </div>
            <div className="slideNav">
                <div className="slideNav-next-prev">
                    <div className="next-prev prev" onClick={onPrev}>
                        {" "}&lt;{" "}
                    </div>
                    <div className="next-prev next" onClick={onNext}>
                        {" "}&gt;{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Slide = ({ image_url, caption, body, link, gitLink, active }) => {
    return (
        <div className={`slide ${active ? "active" : ""}`}>
            <div className="sliderInner">
                <div className="sliderText">
                    <p>{body}</p>
                </div>
                <img src={image_url} alt={caption} />
            </div>
            <span>{caption}</span>
            <Link to={link}>Website</Link>
            <Link to={gitLink}>Github</Link>
        </div>
    );
};

export default Slider;