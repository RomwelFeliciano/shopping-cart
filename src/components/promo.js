import PromoItem from "./promo-item";

export default function Promo({ promos, addToCart, cartItem }) {
  return (
    <div className="col-span-12 flex flex-col justify-start items-center gap-5">
      <h1 className="text-3xl font-bold">Menu of each Promo</h1>
      {promos.map((promo) => (
        <div
          className="col-span-12 flex flex-col gap-4 p-4 bg-neutral-900 rounded"
          key={promo.promoId}
        >
          <h1 className="text-center font-semibold bg-neutral-950 rounded-lg py-2">
            Promo {promo.promoId} --- Lists
          </h1>
          <PromoItem promo={promo} addToCart={addToCart} cartItem={cartItem} />
        </div>
      ))}
    </div>
  );
}
