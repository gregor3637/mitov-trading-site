import React, { Suspense, useState } from "react";
import {
  Link,
  defer,
  redirect,
  useLoaderData,
  useSearchParams,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

type Props = {};

export async function loader() {
  return defer({ vans: getVans() });
}

const Vans = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  const genNewSearchParamString = (key, val) => {
    const sp = new URLSearchParams(searchParams);

    if (val === null) {
      sp.delete(key);
    } else {
      sp.set(key, val);
    }

    return "?" + sp.toString();
  };

  const handleFilterChange = (key, value) => {
    setSearchParams((o) => {
      if (value === null) {
        o.delete(key);
      } else {
        o.set(key, value);
      }

      return o;
    });
  };

  if (error) {
    return <h1>Th ere was an error {error.message}</h1>;
  }

  function renderVanElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter((v) => v.type.toLowerCase() === typeFilter)
      : vans;

    const vanElements = displayedVans.map((van) => (
      <div key={van.id} className="van-tile">
        <Link
          to={`${van.id}`}
          relative="route"
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img alt={van.name} src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type} ttt</i>
        </Link>
      </div>
    ));

    return (
      <>
        <div className="van-list-filter-buttons">
          <Link
            to={genNewSearchParamString("type", "simple")}
            className="van-type simple"
          >
            {/* <Link to="?type=simple" className="van-type simple"> */}
            Simple
          </Link>
          <Link to="?type=rugged" className="van-type rugged">
            rugged
          </Link>
          {/* <button
   onClick={() => {
     setSearchParams({ type: "luxury" });
   }}
   className="van-type luxury"
 > */}
          <button
            onClick={() => {
              handleFilterChange("type", "luxury");
            }}
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
          >
            luxury
          </button>
          {typeFilter && (
            <button
              onClick={() => {
                setSearchParams({});
              }}
              className="van-type clear-filters"
            >
              Clear
            </button>
          )}
        </div>
        <div className="van-list">{vanElements}</div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options XX</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
};
export default Vans;
