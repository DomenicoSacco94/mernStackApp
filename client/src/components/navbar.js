import React from "react";
const recordName = "news";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">{`Create new ${recordName}`}</a>
        </li>
      </ul>
    </nav>
  );
};
