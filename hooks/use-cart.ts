"use client";

import { useCallback } from "react";
import { useCartStore } from "@/store/cart.store";

export function useCart() {
    const items = useCartStore((state) => state.items);
    const isOpen = useCartStore((state) => state.isOpen);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const clearCart = useCartStore((state) => state.clearCart);
    const openCart = useCartStore((state) => state.openCart);
    const closeCart = useCartStore((state) => state.closeCart);

    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    const subtotal = items.reduce(
        (total, item) => total + item.totalPrice,
        0,
    );

    const increment = useCallback(
        (productId: string, variantId?: string) => {
            const item = items.find(
                (cartItem) =>
                    cartItem.productId === productId &&
                    cartItem.variantId === variantId,
            );


            if (!item) {
                return;
            }

            updateQuantity(productId, item.quantity + 1, variantId);
        },
        [items, updateQuantity],


    );

    const decrement = useCallback(
        (productId: string, variantId?: string) => {
            const item = items.find(
                (cartItem) =>
                    cartItem.productId === productId &&
                    cartItem.variantId === variantId,
            );

            if (!item) {
                return;
            }

            if (item.quantity <= 1) {
                removeItem(productId, variantId);
                return;
            }

            updateQuantity(productId, item.quantity - 1, variantId);
        },
        [items, removeItem, updateQuantity],

    );

    return {
        items,
        isOpen,
        itemCount,
        subtotal,
        isEmpty: items.length === 0,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        increment,
        decrement,
    };
}
