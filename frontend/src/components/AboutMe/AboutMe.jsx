import "./AboutMe.css";
import photo from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="main__heading">Студент</h2>
      <article className="about-me__info">
        <div className="about-me__info-text">
          <h3 className="about-me__info-title">Щебетенко Роман</h3>
          <p className="about-me__info-subtitle">
            Начинающий фронтендер
          </p>
          <p className="about-me__info-paragraph">
            Родился в Санкт-Петербурге, но сейчас живу в Сербии.
            Хочу поучаствовать в интересном проекте в качестве front-end разработчика.
          </p>
          <a
            href="https://github.com/romzes2f"
            className="about-me__info-link app__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="аватар пользователя" className="about-me__photo" />
      </article>
    </section>
  );
}

export default AboutMe;