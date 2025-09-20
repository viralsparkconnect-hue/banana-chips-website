import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  const team = [
    {
      name: "Amol Patil",
      position: "Founder & CEO",
      image: "👨‍💼",
      description: "Visionary leader with 10+ years in food industry. Passionate about bringing healthy snacks to every home.",
      achievements: ["Food Technology Graduate", "Former Quality Manager at leading FMCG", "Awarded Best Entrepreneur 2024"]
    },
    {
      name: "Pratik Patil",
      position: "Co-founder & CMO",
      image: "👨‍💻",
      description: "Marketing expert and brand strategist. Dedicated to making Chippyfy a household name across India.",
      achievements: ["MBA in Marketing", "10+ years in Brand Management", "Digital Marketing Expert"]
    }
  ]

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a dream to revolutionize snacking" },
    { year: "2021", event: "First Product Launch", description: "Introduced our signature Classic Salted chips" },
    { year: "2022", event: "1000+ Happy Customers", description: "Reached our first major milestone" },
    { year: "2023", event: "Pan-India Delivery", description: "Expanded delivery across all major cities" },
    { year: "2024", event: "Premium Product Line", description: "Launched gourmet flavors and gift packs" },
    { year: "2025", event: "Going Digital", description: "Launched our comprehensive online platform" }
  ]

  const values = [
    {
      icon: "🌱",
      title: "Natural & Pure",
      description: "We use only the finest bananas with no artificial preservatives or colors"
    },
    {
      icon: "⚡",
      title: "Quality First",
      description: "Every batch is carefully crafted and quality-tested before reaching you"
    },
    {
      icon: "🤝",
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen and continuously improve"
    },
    {
      icon: "🌍",
      title: "Sustainable",
      description: "Committed to eco-friendly practices and supporting local farmers"
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-300 to-yellow-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Chippyfy</h1>
          <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
            From humble beginnings to India's favorite banana chips brand - discover our journey of bringing 
            crispy, healthy, and delicious snacks to families across the nation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  It all started in 2020 when founders Amol and Pratik Patil realized there was a gap in the market 
                  for premium, healthy banana chips. Growing up in Maharashtra, they were familiar with traditional 
                  banana chip making but wanted to bring it to the modern world with better quality and taste.
                </p>
                <p>
                  What began as a small home-based operation has now grown into one of India's most trusted banana 
                  chips brands. We've maintained our commitment to quality while scaling up to serve customers 
                  across the country.
                </p>
                <p>
                  Today, Chippyfy represents more than just snacks - we represent the perfect balance of tradition 
                  and innovation, bringing you the authentic taste of Maharashtra's finest banana chips with modern 
                  packaging and convenience.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8">
                <div className="text-8xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Award Winning</h3>
                <p className="text-gray-600">Recognized as "Best Snack Brand 2024" by Food & Beverage Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">The visionaries behind Chippyfy</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-lg text-yellow-600 font-semibold">{member.position}</p>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">{member.description}</p>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-yellow-500 mr-2">✅</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our story</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot
