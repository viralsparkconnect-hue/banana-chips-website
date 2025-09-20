import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Banana Chips</h2>
        <p className="mb-6">Crispy, tasty, and made with love! 🍌</p>
        <Link href="/products" className="bg-yellow-400 px-6 py-3 rounded shadow hover:bg-yellow-500">
          View Products
        </Link>
      </main>
      <Footer />
    </>
  )
}
