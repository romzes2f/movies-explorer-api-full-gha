import React from "react";
import "./Footer.css";

function Footer({ isVisible }) {
    if (!isVisible) {
        return null;
    }
    return (
        <footer className="footer">
            <h2 className="footer__heading">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__container">
                <p className="footer__date">2023</p>
                <ul className="footer__links">
                    <li>
                        <a
                            href="https://practicum.yandex.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link app__link"
                        >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/romzes2f"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link app__link"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;