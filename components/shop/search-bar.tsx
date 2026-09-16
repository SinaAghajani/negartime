"use client";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}
export default function SearchBar({
  value,
  onChange,
  placeholder = "جستجوی ساعت، مدل یا کالکشن...",
  className,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(value ?? "");
  useEffect(() => {
    setInternalValue(value ?? "");
  }, [value]);
  const currentValue = value ?? internalValue;
  const handleChange = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };
  const clear = () => {
    handleChange("");
  };
  return (
    <div
      className={cn(
        "relative flex h-12 w-full items-center rounded-full border border-border bg-surface transition-colors duration-300 focus-within:border-accent/60",
        className,
      )}
    >
      <Search className="mr-4 size-4 shrink-0 text-muted" />
      <input
        type="search"
        value={currentValue}
        onChange={(event) => handleChange(event.target.value)}
        placeholder={placeholder}
        aria-label="جستجوی محصولات"
        autoComplete="off"
        className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      {currentValue && (
        <button
          type="button"
          onClick={clear}
          aria-label="پاک کردن جستجو"
          className="ml-2 flex size-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-background hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
