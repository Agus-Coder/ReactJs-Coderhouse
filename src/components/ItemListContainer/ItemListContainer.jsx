import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataSet } from "../../utils/Data";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [prodList, setProdList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      DataSet()
        .then((resp) =>
          setProdList(resp.filter((prod) => prod.category === categoriaId))
        )
        .then(console.log(prodList))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      DataSet()
        .then((resp) => setProdList(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return loading ? (
    <h2>Loading awesome things...</h2>
  ) : (
    <div className="container">
      <h1>Store</h1>
      <div className="itemsGrid">
        {prodList.map((obj) => (
          <div key={obj.id} className="card w-100 mx-1">
            <Link to={`/detail/${obj.id}`}>
              <center>
                <h5 className="card-header">{obj.name}</h5>
              </center>
              <div className="card-body">
                <center>
                  <img src={`/src/assets/${obj.image}`} className="w-50" />
                </center>
              </div>
              <div className="card-footer">
                <p>Price: {obj.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
