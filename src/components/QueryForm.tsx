import React, { useState } from "react";

type Props = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  sortDirection: string;
  setSortDirection: (sortDirection: string) => void;
};

const QueryForm: React.FC<Props> = ({
  pageNumber,
  setPageNumber,
  pageSize,
  setPageSize,
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="page-size">Page Size:</label>
        <input
          style={{
            width: 64,
            height: 36,
            color: "black",
            borderRadius: 6,
            margin: 8,
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          id="page-size"
          type="number"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="page-number">Page Number:</label>
        <input
          style={{
            width: 64,
            height: 36,
            color: "black",
            borderRadius: 6,
            margin: 8,
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          id="page-number"
          type="number"
          value={pageNumber}
          onChange={(e) => setPageNumber(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="sort-by">Sort By:</label>
        <select
          style={{
            width: 64,
            height: 36,
            color: "black",
            borderRadius: 6,
            margin: 8,
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="id">Id</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div>
        <label htmlFor="sort-order">Sort Order:</label>
        <select
          style={{
            width: 64,
            height: 36,
            color: "black",
            borderRadius: 6,
            margin: 8,
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          id="sort-order"
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  );
};

export default QueryForm;
