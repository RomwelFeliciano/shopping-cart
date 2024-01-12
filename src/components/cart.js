export default function Cart({ cartItem, removeToCart, removeAllToCart }) {
  return (
    <div className="h-full flex flex-col p-4">
      <h1 className="text-3xl font-bold">My Cart</h1>
      <div className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-3 pt-3">
          {cartItem.length <= 0 ? (
            <p>No items in cart...</p>
          ) : (
            cartItem.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-sky-600 text-white px-3 py-3 rounded-lg capitalize"
              >
                {item.item} -- {item.itemType}
                <button
                  className="bg-red-600 hover:bg-red-800 px-2 rounded-lg text-white cursor-pointer"
                  onClick={() => removeToCart(item, item.promoId)}
                >
                  &times;
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="flex items-center justify-evenly gap-2">
          <button
            className="w-full bg-red-600 hover:bg-red-800 text-white px-2 py-3 rounded-lg"
            onClick={removeAllToCart}
          >
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
}
