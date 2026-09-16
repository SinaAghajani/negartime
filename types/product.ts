export interface ProductVariant {
    id: string;
    name: string;
    value: string;
    price?: number;
    stock?: number;
    available?: boolean;
}

export interface ProductSpecifications {
    caseMaterial?: string;
    caseDiameter?: string;
    caseThickness?: string;
    strapMaterial?: string;
    strapColor?: string;
    dialColor?: string;
    movement?: string;
    waterResistance?: string;
    glass?: string;
    warranty?: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    compareAtPrice?: number;
    currency: string;
    image: string;
    images: string[];
    categoryId: string;
    collectionId?: string;
    badge?: string;
    featured: boolean;
    isNew: boolean;
    inStock: boolean;
    stock: number;
    rating: number;
    reviewCount: number;
    variants?: ProductVariant[];
    specifications?: ProductSpecifications;
    modelPath?: string;
    tags?: string[];
    createdAt?: string;
    updatedAt?: string;
}
