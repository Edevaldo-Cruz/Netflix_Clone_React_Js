import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow.js";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
