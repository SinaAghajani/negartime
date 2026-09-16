"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { AddToCartInput, CartItem } from "@/types/cart";
import { MAX_CART_QUANTITY, MIN_CART_QUANTITY } from "@/lib/constants";

interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    addItem: (input: AddToCartInput) => void;
    removeItem: (productId: string, variantId?: string) => void;
    updateQuantity: (
        productId: string,
        quantity: number,
        variantId?: string,
    ) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
}

function getItemKey(productId: string, variantId?: string): string {
    return variantId ? `${productId}:${variantId}` : productId;
}

function calculateItemPrice(
    product: AddToCartInput["product"],
    variantId?: string,
    providedPrice?: number,
): number {
    if (typeof providedPrice === "number" && Number.isFinite(providedPrice)) {
        return providedPrice;
    }

    if (variantId) {
        const variant = product.variants?.find(
            (item) => item.id === variantId,
        );

        if (typeof variant?.price === "number" && Number.isFinite(variant.price)) {
            return variant.price;
        }

    }

    return product.price;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            isOpen: false,

            addItem: ({
                product,
                quantity = 1,
                variantId,
                variant,
                unitPrice,
            }) => {
                if (!product.inStock || product.stock <= 0) {
                    return;
                }

                const safeQuantity = Math.min(
                    Math.max(quantity, MIN_CART_QUANTITY),
                    Math.min(MAX_CART_QUANTITY, product.stock),
                );

                const price = calculateItemPrice(product, variantId, unitPrice);
                const itemKey = getItemKey(product.id, variantId);

                set((state) => {
                    const existingIndex = state.items.findIndex(
                        (item) =>
                            getItemKey(item.productId, item.variantId) === itemKey,
                    );

                    if (existingIndex === -1) {
                        const newItem: CartItem = {
                            id: itemKey,
                            productId: product.id,
                            product,
                            quantity: safeQuantity,
                            variantId,
                            variant,
                            unitPrice: price,
                            totalPrice: price * safeQuantity,
                        };

                        return {
                            items: [...state.items, newItem],
                        };
                    }

                    const existingItem = state.items[existingIndex];
                    const nextQuantity = Math.min(
                        existingItem.quantity + safeQuantity,
                        Math.min(MAX_CART_QUANTITY, product.stock),
                    );

                    const updatedItem: CartItem = {
                        ...existingItem,
                        product,
                        variantId,
                        variant,
                        unitPrice: price,
                        quantity: nextQuantity,
                        totalPrice: price * nextQuantity,
                    };

                    const items = [...state.items];
                    items[existingIndex] = updatedItem;

                    return { items };
                });
            },

            removeItem: (productId, variantId) => {
                set((state) => ({
                    items: state.items.filter(
                        (item) =>
                            !(
                                item.productId === productId &&
                                item.variantId === variantId
                            ),
                    ),
                }));
            },

            updateQuantity: (productId, quantity, variantId) => {
                set((state) => ({
                    items: state.items
                        .map((item) => {
                            if (
                                item.productId !== productId ||
                                item.variantId !== variantId
                            ) {
                                return item;
                            }

                            const maxQuantity = Math.min(
                                MAX_CART_QUANTITY,
                                item.product.stock,
                            );

                            const nextQuantity = Math.min(
                                Math.max(quantity, MIN_CART_QUANTITY),
                                maxQuantity,
                            );

                            return {
                                ...item,
                                quantity: nextQuantity,
                                totalPrice: item.unitPrice * nextQuantity,
                            };
                        })
                        .filter((item) => item.quantity > 0),
                }));
            },

            clearCart: () => {
                set({ items: [] });
            },

            openCart: () => {
                set({ isOpen: true });
            },

            closeCart: () => {
                set({ isOpen: false });
            },

            toggleCart: () => {
                set((state) => ({
                    isOpen: !state.isOpen,
                }));
            },
        }),
        {
            name: "negartime-cart",
            partialize: (state) => ({
                items: state.items,
            }),
        },

    ),
);
