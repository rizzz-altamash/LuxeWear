// app/page.js
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ComboDeals from '@/components/ComboDeals'
import Features from '@/components/Features'
import Categories from '@/components/Categories'
import NewArrivals from '@/components/NewArrivals'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ComboDeals />
        <Features />
        <Categories />
        <NewArrivals />
      </main>
      <Footer />
    </div>
  )
}