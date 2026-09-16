export interface NavigationItem {
    label: string;
    href: string;
    description?: string;
    external?: boolean;
    children?: NavigationItem[];
}
