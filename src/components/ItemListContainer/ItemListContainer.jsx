import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataSet } from "../../utils/Data";
import Loader from "../Loader";
import "./ItemListContainer.css";

import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [prodList, setProdList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  // useEffect(() => {
  //   if (categoriaId) {
  //     DataSet()
  //       .then((resp) =>
  //         setProdList(resp.filter((prod) => prod.category === categoriaId))
  //       )
  //       .then(console.log(prodList))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {
  //     DataSet()
  //       .then((resp) => setProdList(resp))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [categoriaId]);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    console.log(categoriaId);

    const filter =
      categoriaId === undefined
        ? query(queryCollection, orderBy("name", "asc"))
        : query(
            queryCollection,
            where("type", "==", categoriaId),
            orderBy("name", "asc")
          );

    getDocs(filter)
      .then((res) =>
        setProdList(res.docs.map((el) => ({ id: el.id, ...el.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
      // .then((doc) => setProdList({ id: doc.id, ...doc.data() }));
  }, [categoriaId]);

  return loading ? (
    <Loader />
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
                  <img src={`/src/assets/${obj.imageUrl}`} className="w-50" />
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
