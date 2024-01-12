import PromoItem from "./promo-item";

export default function Promo({ promos, addToCart, cartItem }) {
  return (
    <div className="col-span-12 flex flex-col justify-start items-center gap-5">
      <h1 className="text-3xl font-bold">Menu of each Promo</h1>
      <PromoItem promos={promos} addToCart={addToCart} cartItem={cartItem} />
    </div>
  );
}
