export default function PromoItem({ promo, addToCart, cartItem }) {
  // Get all the types of Item in the Data
  const itemType = [
    ...new Set(promo.items.map((itemType) => itemType.itemType)),
  ];

  return (
    <>
      {itemType.map((iType) => (
        <div className="flex items-center gap-3 pt-3">
          <h2 className="w-24 capitalize">{iType}s:</h2>
          {promo.items
            .filter((item) => item.itemType === iType)
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
      ))}
    </>
  );
}
