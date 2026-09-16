export interface Collection {
    id: string;
    slug: string;
    name: string;
    title: string;
    description: string;
    image: string;
    bannerImage?: string;
    productIds?: string[];
    productCount?: number;
    featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
