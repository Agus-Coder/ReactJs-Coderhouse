import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataSet } from "../../utils/Data";

export const ItemDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  // useEffect(() => {
  //   DataSet().then((res) => {
  //     setProduct(res.filter((el) => el.id === productId));
  //     console.log(product);
  //   });
  // }, []);

  useEffect(() => {
    const db = getFirestore();

    const detailToShow = doc(db, "items", productId); //doc ref

    getDoc(detailToShow)
      .then((el) => {
        if (detailToShow) {
          console.log("exists!", el.data());
          setProduct([{ id: el.id, ...el.data() }]);
        }
      })
      .catch((err) => console.log(err));
    console.log(product);
  }, []);

  return (
    <>
      {product.map((obj) => (
        <center>
          <div key={obj.id} className="card w-75 mx-1">
            <center>
              <h5 className="card-header">{obj.name}</h5>
            </center>
            <div className="card-body">
              <center>
                <img src={`/src/assets/${obj.image}`} className="w-50" />
              </center>
            </div>
            {console.log(obj)}
            <div className="card-footer">
              <p>Price: {obj.price}</p>
            </div>
          </div>
        </center>
      ))}
    </>
  );
};
