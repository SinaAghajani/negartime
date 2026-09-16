import BrandStory from "@/components/home/brand-story";
import CategoriesSection from "@/components/home/categories-section";
import CollectionsSection from "@/components/home/collections-section";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import NewArrivals from "@/components/home/new-arrivals";
import Newsletter from "@/components/home/newsletter";
import Showcase from "@/components/home/showcase";
export default function HomePage() {
  return (
    <>
      <Hero /> <FeaturedProducts /> <CategoriesSection /> <CollectionsSection />
      <BrandStory /> <NewArrivals /> <Showcase /> <Newsletter />
    </>
  );
}
