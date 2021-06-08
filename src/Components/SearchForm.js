import React from "react";
import "../styles/SearchForm.css"

function SearchForm(props) {
  return (
    <form onSubmit={props.handleForm} className = "search">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3 search-button" >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;