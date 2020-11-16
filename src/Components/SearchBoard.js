import React from "react";

export const SearchBoard = ({ searchByUsername, onChangeSearchUsername }) => {
  return (
    <div className="mt-5">
      <form role="search" className="form-inline">
        <div className="form-group">
          <input
            type="search"
            className="form-control ds-input p-2"
            id="search"
            name="username"
            placeholder="type here..."
            // value={searchUsername}
            // onChange={onChangeSearchUsername}
            onChange={(e) => onChangeSearchUsername(e)}
          />
        </div>
        <button
          type="button"
          onClick={(searchUsername) => searchByUsername(searchUsername)}
          className="btn btn-success ml-4"
        >
          search
        </button>
      </form>
    </div>
  );
};
