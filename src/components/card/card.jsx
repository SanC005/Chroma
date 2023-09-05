import React from "react";
import "./card.css";
function Card() {
  return (
    <div className="cardbox">
      <div className="imagebox">
        <img
          alt="flag"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAARVBMVEX////MAAHMAADsxMTv7+/GAAD///3IYl7HLSvPAAPMBATJAADj4+Pw7+3x8/Liurruy8vz+fnJX1vHZGLJTkrKJSLFZl6noKQgAAABu0lEQVR4nO3cfWvCMBCA8eTWqklq1bnt+3/UaT3G+nJQ2VkWeH6CHajL8dB/GkpD17i6vEuekcPFd5UuNMHXvmQZKzkenBdp/MeWGGV46UFKrGXssVTD2Le4Y5WMLZOTpJKxqW2htqK2jdqK2jZqK2rbqK2obaO2oraN2oraNmoratuorahto7aito3aito2aitq2xhbcZLYqK2obWvCcecqXCXPassh+K5yDL1ziKvEMqktxbt2H05vrs4fJc3O7vJ59l3lFErbtsVPKyWlce3cJscFyjBwEG/T1HF+g8nfhfstQnHta/UXn/7yc1/Pt7Fnef6/TO0NUXtL1N4StbdE7S1Re0vU3lKVtUWS/9VNO2uTYvJeZLiW9FRknk+c17hdS7pfuUua9M4l+V+5e++TfJU03ie5j+2/T9IMG0bh5z0Mh8dfISx8uBt9eH8f/WRfFnelFn/y6/+tXeVxqHYPkB3XAbVt1FbV1q50bE4SC7UVtW3UVtS2UVtR20ZtRW0btRW1bdRW1LZRW1HbRm1FbRu1FbVt1FbUtlFbUdtGbUVt20vGnt5q84qxu971CauLz3GNzs9x7btvLvdIsrvkUbUAAAAASUVORK5CYII="
        ></img>
      </div>
      <div className="infobox item">
        <div>
          <div>Name</div>
          <div>Country</div>
        </div>
      </div>
      <div className="infobox item logobox">
        <div className="insidebox ">
          <div className="logo">
            <div className="logotext">$</div>
          </div>
          <div>Currency</div>
        </div>
      </div>
      <div className="infobox item logobox">
        <div className="insidebox">
          <div className="logo">
            <div className="logotext">Ae</div>
          </div>
          <div>Language</div>
        </div>
      </div>
      <div className="infobox">
        <div className="item lastitem">
          <div>44,000</div>
          <div>Population</div>
        </div>
        <div className="item lastitem">
          <div>
            22m<sup>2</sup>
          </div>
          <div>Area</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
