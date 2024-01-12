"use client";

import { promos } from "./data.js";
import { useState } from "react";
import Cart from "@/components/cart.js";
import Promo from "@/components/promo.js";

export default function Home() {
  // State for storing the items in cart
  const [cartItem, setCartItem] = useState([]);

  // Add the item into the Cart
  function addToCart(item, promoId) {
    // Check if already in the cart with the same Item Type
    const cartItemTypeIndex = cartItem.findIndex(
      (cartItemType) =>
        cartItemType.itemType === item.itemType &&
        cartItemType.promoId === promoId
    );

    // Check if already in the cart with the specific same Item
    const cartItemIndex = cartItem.findIndex(
      (cartItem) => cartItem.item === item.item && cartItem.promoId === promoId
    );

    // Proceed if the same Item Type already exists in the cart with the same Promo ID
    if (cartItemTypeIndex !== -1) {
      // Create a temporary variable to hold the Items
      const tempCartItem = [...cartItem];
      // Remove the Item with the same Item Type with the same Promo ID and Switch with it
      tempCartItem.splice(cartItemTypeIndex, 1, {
        ...item,
        inCart: true,
        promoId,
      });
      setCartItem(tempCartItem);

      // Proceed if the same specific Item already exists in the cart
      if (cartItemIndex !== -1) {
        // Create a temporary variable to hold the Items
        const tempCartItem = [...cartItem];
        // Remove the Item
        tempCartItem.splice(cartItemTypeIndex, 1);
        setCartItem(tempCartItem);
      }
    }
    // Proceed if the same Item Type does not exist in the cart with the same Promo ID
    else {
      // Opposite Item Type Checker
      let oppositeType;

      if (item.itemType === "fruit") {
        oppositeType = "protein";
      } else if (item.itemType === "protein") {
        oppositeType = "fruit";
      } else {
        oppositeType = null;
      }

      // Check if already in the cart with the opposite Item Type
      const oppositeItemTypeIndex = cartItem.findIndex(
        (oppositeItemType) =>
          oppositeItemType.itemType === oppositeType &&
          oppositeItemType.promoId === promoId
      );

      // Proceed if the opposite Item Type exist in the cart with the same Promo ID
      if (oppositeItemTypeIndex !== -1) {
        // Create a temporary variable to hold the Items
        const tempCartItem = [...cartItem];
        // Remove the Item with the opposite Item Type with the same Promo ID and Switch with it
        tempCartItem.splice(oppositeItemTypeIndex, 1, {
          ...item,
          inCart: true,
          promoId,
        });
        setCartItem(tempCartItem);
      }
      // Proceed if the No Opposite or Same Item Type exist in the cart with the same Promo ID
      else {
        // Add the Item in the Cart
        const newItem = { ...item, inCart: true, promoId };
        setCartItem([...cartItem, newItem]);
      }
    }
  }

  // Remove the item from the Cart
  function removeToCart(item, promoId) {
    // Check if already in the cart with the specific same Item
    const cartItemIndex = cartItem.findIndex(
      (cartItem) => cartItem.item === item.item && cartItem.promoId === promoId
    );

    // Proceed if the same specific Item already exists in the cart
    if (cartItemIndex !== -1) {
      // Create a temporary variable to hold the Items
      const tempCartItem = [...cartItem];
      // Remove the Item
      tempCartItem.splice(cartItemIndex, 1);
      setCartItem(tempCartItem);
    }
  }

  // Remove all the Items from the Cart
  function removeAllToCart() {
    setCartItem([]);
  }

  return (
    <main className="w-full grid grid-cols-12 min-h-screen">
      <div className="col-span-10 grid grid-cols-12 p-4">
        <Promo promos={promos} addToCart={addToCart} cartItem={cartItem} />
      </div>
      <div className="w-80 fixed right-0 min-h-screen h-full bg-white text-black">
        <Cart
          cartItem={cartItem}
          removeAllToCart={removeAllToCart}
          removeToCart={removeToCart}
        />
      </div>
    </main>
  );
}
