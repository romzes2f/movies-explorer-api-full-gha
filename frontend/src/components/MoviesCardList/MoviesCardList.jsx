import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";
import {
    MOBILE_CARDS_DISPLAY_LIMIT,
    TABLET_CARDS_DISPLAY_LIMIT,
    DESKTOP_CARDS_DISPLAY_LIMIT,
} from "../utils/constants";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
    cards,
    isLoading,
    isNotFound,
    isSavedFilms,
    savedMovies,
    isReqError,
    handleLikeFilm,
    onDeleteCard,
}) {
    const [shownMovies, setShownMovies] = useState(0);
    const { pathname } = useLocation();

    function getMovieFromSaved(savedMovies, card) {
        return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    }

    function setMoviesShownCount() {
        const display = window.innerWidth;
        if (display > 1279) {
            setShownMovies(16);
        } else if (display > 767) {
            setShownMovies(8);
        } else {
            setShownMovies(5);
        }
    }

    useEffect(() => {
        setMoviesShownCount();
    }, [cards]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("resize", setMoviesShownCount);
        }, 500);
        return () => {
            window.removeEventListener("resize", setMoviesShownCount);
        };
    });

    function expandMoviesDisplay() {
        const display = window.innerWidth;
        if (display > 1279) {
            setShownMovies(shownMovies + DESKTOP_CARDS_DISPLAY_LIMIT);
        } else if (display > 767) {
            setShownMovies(shownMovies + TABLET_CARDS_DISPLAY_LIMIT);
        } else {
            setShownMovies(shownMovies + MOBILE_CARDS_DISPLAY_LIMIT);
        }
    }

    return (
        <section className="cards">
            {isLoading && <Preloader />}
            {isNotFound && !isLoading && <SearchError errorText={"Not found"} />}
            {isReqError && !isLoading && (
                <SearchError
                    errorText={
                        "Sorry! An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
                    }
                />
            )}
            {!isLoading && !isReqError && !isNotFound && (
                <>
                    {pathname === "/saved-movies" ? (
                        <>
                            <ul className="cards__list">
                                {cards.map((card) => (
                                    <MoviesCard
                                        key={isSavedFilms ? card._id : card.id}
                                        saved={getMovieFromSaved(savedMovies, card)}
                                        cards={cards}
                                        card={card}
                                        handleLikeFilm={handleLikeFilm}
                                        isSavedFilms={isSavedFilms}
                                        onDeleteCard={onDeleteCard}
                                        savedMovies={savedMovies}
                                    />
                                ))}
                            </ul>
                            <div className="cards__button-wrapper"></div>
                        </>
                    ) : (
                        <>
                            <ul className="cards__list">
                                {cards.slice(0, shownMovies).map((card) => (
                                    <MoviesCard
                                        key={isSavedFilms ? card._id : card.id}
                                        saved={getMovieFromSaved(savedMovies, card)}
                                        cards={cards}
                                        card={card}
                                        handleLikeFilm={handleLikeFilm}
                                        isSavedFilms={isSavedFilms}
                                        onDeleteCard={onDeleteCard}
                                        savedMovies={savedMovies}
                                    />
                                ))}
                            </ul>
                            <div className="cards__button-wrapper">
                                {cards.length > shownMovies ? (
                                    <button
                                        className="cards__button-wrapper cards__button"
                                        onClick={expandMoviesDisplay}
                                    >
                                        Eщe
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;