import type { Product } from "./product";

export interface CartItemVariant {
    id?: string;
    name: string;
    value: string;
}

export interface CartItem {
    id: string;
    productId: string;
    product: Product;
    quantity: number;
    variantId?: string;
    variant?: CartItemVariant;
    unitPrice: number;
    totalPrice: number;
}

export interface Cart {
    items: CartItem[];
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    itemCount: number;
}

export interface AddToCartInput {
    product: Product;
    quantity?: number;
    variantId?: string;
    variant?: CartItemVariant;
    unitPrice?: number;
}
