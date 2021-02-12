import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/_search-bar.css";
import { useDispatch } from "react-redux";
import { addResultsSongs, removeResultsSongs } from "../store/index";
import { getResults } from "../auth/server";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*SEND QUERY */

    if (query && query.length > 0) {
      //console.log(query);
      const response = await getResults(query);
      dispatch(addResultsSongs(response));
    } else {
      dispatch(removeResultsSongs());
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
