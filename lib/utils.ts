import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

export function isBrowser(): boolean {
    return typeof window !== "undefined";
}

export function isServer(): boolean {
    return typeof window === "undefined";
}

export function clamp(
    value: number,
    minimum: number,
    maximum: number,
): number {
    return Math.min(Math.max(value, minimum), maximum);
}

export function createId(prefix = "id"): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getInitials(value: string): string {
    return value
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();
}

export function removeUndefined<T extends Record<string, unknown>>(object: T) {
    return Object.fromEntries(
        Object.entries(object).filter(([, value]) => value !== undefined),
    ) as Partial<T>;
}
