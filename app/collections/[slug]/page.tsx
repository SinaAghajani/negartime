import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionHero from "@/components/collection/collection-hero";
import ProductGrid from "@/components/product/product-grid";
import { collections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { createPageMetadata } from "@/config/seo";
interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}
export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) {
    return createPageMetadata("کالکشن پیدا نشد");
  }
  return createPageMetadata(
    collection.title,
    collection.description,
    `/collections/${collection.slug}`,
  );
}
export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) {
    notFound();
  }
  const collectionProducts = getProductsByCollection(collection.id);
  return (
    <main>
      <CollectionHero collection={collection} />
      <section className="section">
        <div className="container">
          <ProductGrid products={collectionProducts} columns={4} />
        </div>
      </section>
    </main>
  );
}
