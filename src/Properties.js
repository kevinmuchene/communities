import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (!id) return;
    axios
      .get(
        "https://6665cad5d122c2868e41c3e4.mockapi.io/api/v1/communities/" +
          id +
          "/properties"
      )
      .then((response) => setProperties(response.data));
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Properties in {state.name}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {properties.map((property, i) => {
          if (
            typeof property.type !== "string" ||
            typeof property.price !== "string"
          )
            return <Fragment key={i}></Fragment>;
          return (
            <div
              key={i}
              style={{
                
                border: "solid 1px black",
                padding: "20px",
                width: "300px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>{property.type}</h3>
              <p>{property.price}</p>
            </div>
          );
        })}
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "2em", marginTop: "2em"}}>
        <Link to="/add-property" state={state}>
          Add Property
        </Link>
        <Link to="/">
          <button>Back To Communites</button>
        </Link>
      </div>
    </div>
  );
}
