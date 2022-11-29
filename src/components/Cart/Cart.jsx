import { useCartContext } from "../../Context/CartContext";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartList, emptyCart, totalItems, deleteItem } = useCartContext();

  return totalItems() === 0 ? (
    <EmptyCart totalItems={totalItems()} />
  ) : (
    <section className="sm:container sm:mx-auto mt-10 w-full">
      <div className="flex flex-wrap shadow-md my-10">
        <div className="xl:w-3/4 w-full bg-white px-3 sm:px-10 py-10">
          <div className="flex justify-between border-b pb-8 ">
            <h1 className="font-semibold text-2xl">Cart</h1>
            <h2 className="font-semibold text-2xl">{totalItems()} Products</h2>
          </div>
          <div className="flex mt-10 mb-5 overflow-auto">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Products
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ml-12 sm:ml-0">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase hidden w-1/5 sm:block">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ml-12 sm:ml-0">
              Total
            </h3>
          </div>
          <div className="overflow-x-auto">
            {cartList?.map((el) => {
              return (
                <CartItem
                  key={el.id}
                  name={el.name}
                  category={el.category}
                  quantity={el.quantity}
                  price={el.price}
                  pictureUrl={el.imagen}
                  deleteItem={deleteItem}
                  id={el.id}
                />
              );
            })}
          </div>

          <button
            onClick={() => emptyCart()}
            className="mt-5 font-semibold hover:text-red-800 text-gray-500 text-xs flex items-center"
          >
            Vaciar Carrito
          </button>
          <Link
            to="/productos"
            className="flex font-semibold text-gray-500 hover:text-red-800 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-gray-500 hover:text-red-800 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Seguir Comprando
          </Link>
        </div>
        {/* <CartForm
          totalItems={totalItems}
          totalPrice={totalPrice}
          onSubmit={onSubmit}
        /> */}
      </div>
    </section>
  );
};
