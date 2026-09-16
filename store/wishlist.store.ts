"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/types/product";

interface WishlistStore {
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    toggleItem: (product: Product) => void;
    clearWishlist: () => void;
    hasItem: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product) => {
                set((state) => {
                    if (state.items.some((item) => item.id === product.id)) {
                        return state;
                    }

                    return {
                        items: [...state.items, product],
                    };
                });
            },

            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId),
                }));
            },

            toggleItem: (product) => {
                const exists = get().items.some(
                    (item) => item.id === product.id,
                );

                if (exists) {
                    get().removeItem(product.id);
                    return;
                }

                get().addItem(product);
            },

            clearWishlist: () => {
                set({ items: [] });
            },

            hasItem: (productId) => {
                return get().items.some((item) => item.id === productId);
            },
        }),
        {
            name: "negartime-wishlist",
            partialize: (state) => ({
                items: state.items,
            }),
        },

    ),
);
