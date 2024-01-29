import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../api";

type Props = {};

export const loader = ({ params }) => {
  return getVan(params.id);
};

const VanDetail = (props: Props) => {
  const location = useLocation();
  const van = useLoaderData();
  console.log("🚀 ~ VanDetail ~ location:", location);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <div className="van-detail">
        <img alt={van.name} src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetail;
