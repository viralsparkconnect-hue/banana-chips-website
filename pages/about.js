import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          At Banana Chips, we bring you the crispiest and tastiest chips made from the finest bananas.
          Our mission is to deliver joy in every bite! 🍌
        </p>
      </main>
      <Footer />
    </>
  )
}
