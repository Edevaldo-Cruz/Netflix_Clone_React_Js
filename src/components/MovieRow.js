import React, { useState } from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  const [scrollX, setSrcollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 4);
    if (x > 0) {
      x = 0;
    }
    setSrcollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 4);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setSrcollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 250,
          }}
        >
          {console.log(items.results)}
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <a
                  //href={`https://www.youtube.com/results?search_query=trailer${item.name}`}
                  href={`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBMfMu-OIwJQ9_5lG70ky4Zviyuix-sAaM&type=video&q=${item.name}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
