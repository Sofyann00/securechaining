import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Professional Cybersecurity Services</h1>
        <p className="mt-2 text-muted-foreground">
          Protect your digital assets and infrastructure with our comprehensive cybersecurity solutions. From vulnerability assessments to penetration testing, 
          we offer expert services to identify security weaknesses and strengthen your defenses against cyber threats.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *All prices are in IDR. Custom security packages available for specific business needs. Contact our team for detailed security consultations.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}