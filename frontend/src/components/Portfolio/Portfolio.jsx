import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__heading">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__line">
                    <Link
                        to="https://romzes2f.github.io/how-to-learn/"
                        className="portfolio__link-text portfolio__link app__link"
                        target="_blank"
                        rel="noreferrer"
                    >Статичный сайт
                    </Link>
                </li>
                <li className="portfolio__line">
                    <Link
                        to="https://romzes2f.github.io/russian-travel/"
                        className="portfolio__link-text portfolio__link app__link"
                        target="_blank"
                        rel="noreferrer"
                    >Адаптивный сайт
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://romzes2f.github.io/mesto/"
                        className="portfolio__link-text portfolio__link app__link portfolio__links-last"
                        target="_blank"
                        rel="noreferrer"
                    >Одностраничное приложение
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;