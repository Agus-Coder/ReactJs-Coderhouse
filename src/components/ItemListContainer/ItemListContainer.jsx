import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataSet } from "../../utils/Data";

function ItemListContainer({ greeting }) {
  const [prodList, setProdList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    if (catId) {
      DataSet()
        .then((res) =>
          setProdList(res.filter((prod) => prod.category === catId))
        )
        .finally(() => setLoading(false));
    } else {
    }
    DataSet()
      .then((res) => setProdList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [catId]);

  return loading ? (
    <h2>Loading awesome things...</h2>
  ) : (
    <div className="container">
      <h1>Store</h1>
      {prodList.map((obj) => (
        <div key={obj.id} className="card w-25 mt-2">
          <Link to={`/detail/${obj.id}`}>
            <div className="card-header">{obj.name}</div>
            <div className="card-body">
              <center>
                <img src={obj.image} className="w-50" />
              </center>
            </div>
            <div className="card-footer">
              Category: {obj.category}
              Price : {obj.price}
            </div>
          </Link>
        </div>
      ))}

      <div className="row justify-content-center align-items-center">
        <div className="col-5 divdiv">
          <h2 className="welcome-message">{greeting}</h2>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
