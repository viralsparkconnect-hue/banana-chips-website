export default function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center">
        🍌 Chippyfy
      </div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/products" className="hover:underline">Products</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
