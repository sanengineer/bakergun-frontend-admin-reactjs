import React from "react";

export const SearchBoard = ({
  value,
  handleOnChange,
  searchByUsername,
  onChangeSearchUsername,
  onChangeParams,
}) => {
  return (
    <div className="mt-5">
      <form
        role="search"
        className="form-inline"
        onSubmit={searchByUsername}
        // onSubmit={handleOnChange}
      >
        <div className="form-group">
          <input
            type="search"
            className="form-control ds-input p-2"
            id="search"
            name="username"
            placeholder="type here..."
            // onChange={(e) => onChangeParams(e)}
            onChange={(e) => onChangeSearchUsername(e)}
          />
        </div>
        <button
          type="submit"
          // type="button"
          // onClick={(searchUsername) => searchByUsername(searchUsername)}
          className="btn btn-success ml-4"
        >
          search
        </button>
      </form>
    </div>
  );
};
