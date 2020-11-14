import React from "react";

export const SearchBoard = () => {
  return (
    <div className="mt-5">
      <form role="search" className="form-inline">
        <div className="form-group">
          <input
            type="search"
            className="form-control ds-input p-2"
            id="search"
            placeholder="type here..."
          />
        </div>
        <button type="submit" className="btn btn-success ml-4">
          search
        </button>
      </form>
    </div>
  );
};
