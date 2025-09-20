import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const products = [
  { name: "Classic Salted", price: "₹50" },
  { name: "Spicy Masala", price: "₹60" },
  { name: "Sweet Caramel", price: "₹70" },
  { name: "Tangy Tomato", price: "₹65" },
]

export default function Products() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
