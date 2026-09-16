import { Check, ShieldCheck, Truck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductSpecifications } from "@/types/product";
interface ProductDetailsProps {
  specifications?: ProductSpecifications;
  className?: string;
}
const specificationLabels: Record<keyof ProductSpecifications, string> = {
  caseMaterial: "جنس قاب",
  caseDiameter: "قطر قاب",
  caseThickness: "ضخامت قاب",
  strapMaterial: "جنس بند",
  strapColor: "رنگ بند",
  dialColor: "رنگ صفحه",
  movement: "موتور",
  waterResistance: "مقاومت در برابر آب",
  glass: "شیشه",
  warranty: "گارانتی",
};
export default function ProductDetails({
  specifications,
  className,
}: ProductDetailsProps) {
  if (!specifications) return null;
  const entries = Object.entries(specifications).filter(
    ([, value]) => value !== undefined && value !== null && value !== "",
  ) as [keyof ProductSpecifications, string][];
  if (!entries.length) return null;
  return (
    <div className={cn("space-y-8", className)}>
      <div>
        <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
          Specifications
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-foreground">
          مشخصات محصول
        </h2>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="divide-y divide-border">
          {entries.map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-2 gap-4 px-5 py-4 sm:grid-cols-[0.7fr_1.3fr]"
            >
              <span className="text-xs text-muted">
                {specificationLabels[key]}
              </span>
              <span className="text-sm font-medium text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface/50 p-4">
          <ShieldCheck className="size-5 text-accent" />
          <p className="mt-3 text-xs font-medium text-foreground">
            تضمین اصالت
          </p>
          <p className="mt-1 text-[11px] leading-5 text-muted">انتخاب مطمئن</p>
        </div>
        <div className="rounded-xl border border-border bg-surface/50 p-4">
          <Truck className="size-5 text-accent" />
          <p className="mt-3 text-xs font-medium text-foreground">ارسال امن</p>
          <p className="mt-1 text-[11px] leading-5 text-muted">
            بسته‌بندی حرفه‌ای
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface/50 p-4">
          <Wrench className="size-5 text-accent" />
          <p className="mt-3 text-xs font-medium text-foreground">
            خدمات پس از فروش
          </p>
          <p className="mt-1 text-[11px] leading-5 text-muted">
            پشتیبانی NegarTime
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted">
        <Check className="size-4 text-success" /> اطلاعات محصول قابل بررسی و
        به‌روزرسانی از طریق API خواهد بود.
      </div>
    </div>
  );
}
