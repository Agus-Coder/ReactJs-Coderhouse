import { Link } from "react-router-dom";


const EmptyCart = ({totalItems}) => {

  return (
    <section className="container w-3/4 mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Cart</h1>
            <h2 className="font-semibold text-2xl">
            {totalItems} Items Added
            </h2>
          </div>
          <div className="flex">
            <h3 className="font-light text-2xl">
              There are no products in your Cart
            </h3>
          </div>
          <Link
            to="/"
            className="flex font-semibold text-gray-500 hover:text-red-800 text-sm mt-10"
          >

            <h3>Go to Shop</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;