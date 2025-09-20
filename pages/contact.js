import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4 max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Message" className="w-full p-2 border rounded" rows="5" required></textarea>
          <button type="submit" className="bg-yellow-400 px-6 py-2 rounded shadow hover:bg-yellow-500">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}
