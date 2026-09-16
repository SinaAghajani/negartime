export interface Category {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: string;
    parentId?: string;
    productCount?: number;
    featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
