"use client";

import { useCallback } from "react";
import { useWishlistStore } from "@/store/wishlist.store";

export function useWishlist() {
    const items = useWishlistStore((state) => state.items);
    const addItem = useWishlistStore((state) => state.addItem);
    const removeItem = useWishlistStore((state) => state.removeItem);
    const toggleItem = useWishlistStore((state) => state.toggleItem);
    const clearWishlist = useWishlistStore((state) => state.clearWishlist);

    const isInWishlist = useCallback(
        (productId: string) => {
            return items.some((item) => item.id === productId);
        },
        [items],
    );

    const toggleWishlist = useCallback(
        (product: Parameters<typeof addItem>[0]) => {
            toggleItem(product);
        },
        [toggleItem],
    );

    return {
        items,
        count: items.length,
        isEmpty: items.length === 0,
        addItem,
        removeItem,
        toggleItem,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
    };
}
