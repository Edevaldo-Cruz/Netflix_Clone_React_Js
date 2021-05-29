import React, { useEffect, useState } from "react";

import "./App.css";
import Tmdb from "./Tmdb";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow.js";
import Header from "./components/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Site baseado na Netflix para fins didaticos. Direito de imagens Netflix
        e dados coletados no sites
        <a href="https://www.themoviedb.org/?language=pt-BR">Themoviedb.org</a>
        <br /> Utilizado API do TMDB, React, HTML e CSS. <br />
        <a href="https://www.linkedin.com/in/edevaldo-cruz-8586a8a4/">
          Edevaldo Cruz Antonio
        </a>
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" />
        </div>
      )}
    </div>
  );
};
