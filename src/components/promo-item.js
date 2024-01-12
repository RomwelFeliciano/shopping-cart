export default function PromoItem({ promos, addToCart, cartItem }) {
  return (
    <>
      {promos.map((promo) => (
        <div
          className="col-span-12 flex flex-col gap-4 p-4 bg-neutral-900 rounded"
          key={promo.promoId}
        >
          <h1 className="text-center font-semibold bg-neutral-950 rounded-lg py-2">
            Promo {promo.promoId} --- Lists
          </h1>

          <div className="flex items-center gap-3 pt-3">
            <h2 className="w-24">Fruits:</h2>
            {promo.items
              .filter((item) => item.itemType === "fruit")
              .map((item) => (
                <button
                  className={`w-64 py-2 rounded-lg cursor-pointer capitalize ${
                    cartItem.some(
                      (cItem) =>
                        cItem.item === item.item &&
                        cItem.inCart &&
                        cItem.promoId === promo.promoId
                    )
                      ? "bg-red-700"
                      : "bg-sky-600 hover:bg-sky-800"
                  }`}
                  key={item.item}
                  onClick={() => addToCart(item, promo.promoId)}
                >
                  {item.item}
                </button>
              ))}
          </div>

          <div className="flex items-center gap-3 pt-3">
            <h2 className="w-24">Proteins:</h2>
            {promo.items
              .filter((item) => item.itemType === "protein")
              .map((item) => (
                <button
                  className={`w-64 py-2 rounded-lg cursor-pointer capitalize ${
                    cartItem.some(
                      (cItem) =>
                        cItem.item === item.item &&
                        cItem.inCart &&
                        cItem.promoId === promo.promoId
                    )
                      ? "bg-red-700"
                      : "bg-sky-600 hover:bg-sky-800"
                  }`}
                  key={item.item}
                  onClick={() => addToCart(item, promo.promoId)}
                >
                  {item.item}
                </button>
              ))}
          </div>

          <div className="flex items-center gap-3 pt-3">
            <h2 className="w-24">Carbs:</h2>
            {promo.items
              .filter((item) => item.itemType === "carb")
              .map((item) => (
                <button
                  className={`w-64 py-2 rounded-lg cursor-pointer capitalize ${
                    cartItem.some(
                      (cItem) =>
                        cItem.item === item.item &&
                        cItem.inCart &&
                        cItem.promoId === promo.promoId
                    )
                      ? "bg-red-700"
                      : "bg-sky-600 hover:bg-sky-800"
                  }`}
                  key={item.item}
                  onClick={() => addToCart(item, promo.promoId)}
                >
                  {item.item}
                </button>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
