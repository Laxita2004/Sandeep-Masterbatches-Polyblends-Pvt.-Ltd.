import React from "react";
import { Link } from "react-router-dom";
import "./ViewMore.css";

const ViewMore = ({ path }) => {
  return (
    <Link to={`/${path}`} className="view-more">
      View More
    </Link>
  );
};

export default ViewMore;
