import React, { useState } from "react";
import axios from "axios";
const Search = ({ id, se }) => {
  const [searchphoto, setsearchphoto] = useState("");
  const onhandleChange = (e) => {
    setsearchphoto(e);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      searchphoto +
      "&client_id=" +
      id;
    axios.get(url).then((res) =>{
        se(res.data.results)
    } )
}

  const somework = (fn, delay) => {
    let timer;
    return function () {
      let context = this,
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, arguments);
      }, delay);
    };
  };

  const betterfunction = somework(onhandleChange, 300);

  return (
    <div className="insearch">
      <input
        type="text"
        className="searchinp"
        placeholder="Search For Images"
        onChange={(e) => betterfunction(e.target.value)}
      />
    </div>
  );
};

export default Search;
