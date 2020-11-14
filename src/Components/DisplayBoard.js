import React from "react";

export const DisplayBoard = ({ numberOfUsers, getAllUsers }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#eaffeb",
        borderRadius: "4px",
        border: "1px solid #016d3b",
      }}
    >
      <div className="card-body display-board">
        <h4>Users Created</h4>
        <div
          className="number"
          style={{ fontSize: "28px", fontWeight: "bold" }}
        >
          {numberOfUsers}
        </div>
        <div className="mt-4">
          <button
            type="button"
            onClick={(e) => getAllUsers()}
            className="btn btn-warning"
          >
            Get all Users
          </button>
        </div>
      </div>
    </div>
  );
};
