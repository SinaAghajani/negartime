import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Product3DViewer from "@/components/product/product-3d-viewer";
import ProductActions from "@/components/product/product-actions";
import ProductDetails from "@/components/product/product-details";
import ProductGallery from "@/components/product/product-gallery";
import ProductInfo from "@/components/product/product-info";
import ProductPrice from "@/components/product/product-price";
import ProductOptions from "@/components/product/product-options";
import RelatedProducts from "@/components/product/related-products";
import { getProductBySlug, products } from "@/data/products";
import { createPageMetadata } from "@/config/seo";
interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return createPageMetadata("محصول پیدا نشد");
  }
  return createPageMetadata(
    product.name,
    product.description,
    `/shop/${product.slug}`,
  );
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  return (
    <main>
      <section className="border-b border-border">
        <div className="container py-8 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
            <ProductGallery product={product} />
            <div className="lg:sticky lg:top-28">
              <ProductInfo product={product} />
              <div className="my-7 border-t border-border" />
              <ProductPrice product={product} />
              <div className="my-7 border-t border-border" />
              {product.variants?.length ? (
                <ProductOptions
                  product={product}
                  onVariantChange={() => undefined}
                />
              ) : null}
              <div className="mt-7">
                <ProductActions product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <ProductDetails specifications={product.specifications} />
          {product.modelPath ? (
            <Product3DViewer product={product} />
          ) : (
            <div className="hidden lg:block" />
          )}
        </div>
      </section>
      <RelatedProducts product={product} />
    </main>
  );
}
