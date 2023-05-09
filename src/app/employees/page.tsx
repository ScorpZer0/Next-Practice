import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="employees-root flex flex-col">
      <button className="page-button">
        <Link className="button-link" href="/employees/get">
          Get All
        </Link>
      </button>
      <button className="page-button">
        <Link className="button-link" href="/employees/get/{id}">
          Get By Id
        </Link>
      </button>
      <button className="page-button">
        <Link className="button-link" href="/employees/post">
          Post
        </Link>
      </button>
      <button className="page-button">
        <Link className="button-link" href="/employees/patch">
          Patch
        </Link>
      </button>
      <button className="page-button">
        <Link className="button-link" href="/employees/delete">
          Delete
        </Link>
      </button>
    </div>
  );
};

export default page;
