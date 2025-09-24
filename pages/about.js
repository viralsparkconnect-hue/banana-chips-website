import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  const team = [
    {
      name: "Amol Patil",
      position: "Founder & CEO",
      image: "👨‍💼",
      description: "Visionary leader with 5+ years in food industry. Passionate about bringing healthy snacks to every home globally.",
      achievements: ["Food Technology Graduate", "Former Quality Manager at leading FMCG", "Awarded Best Entrepreneur 2024"],
      quote: "Our dream is to make Chippyfy a household name from New York to Tokyo, while staying true to our Maharashtra roots."
    },
    {
      name: "Pratik Patil",
      position: "Co-founder & CMO",
      image: "👨‍💻",
      description: "Marketing expert and brand strategist. Dedicated to making Chippyfy a beloved global brand while preserving authenticity.",
      achievements: ["MBA in Marketing", "10+ years in Brand Management", "Digital Marketing Expert"],
      quote: "Every packet we ship carries the warmth of Indian hospitality and the promise of authentic taste worldwide."
    }
  ]

  const milestones = [
    { 
      year: "2020", 
      event: "Company Founded", 
      description: "Started with a dream to revolutionize global snacking from our home in Nashik",
      icon: "🏠"
    },
    { 
      year: "2021", 
      event: "First International Order", 
      description: "Shipped our first batch to USA, marking our global journey",
      icon: "🌍"
    },
    { 
      year: "2022", 
      event: "10,000+ Global Customers", 
      description: "Reached customers across 25 countries with authentic Indian flavors",
      icon: "🎯"
    },
    { 
      year: "2023", 
      event: "ISO Certification", 
      description: "Achieved international quality standards and food safety certification",
      icon: "🏆"
    },
    { 
      year: "2024", 
      event: "50+ Countries Served", 
      description: "Expanded to serve customers across all continents",
      icon: "🌏"
    },
    { 
      year: "2025", 
      event: "Digital Excellence", 
      description: "Launched comprehensive e-commerce platform for seamless global ordering",
      icon: "💻"
    }
  ]

  const values = [
    {
      icon: "🌱",
      title: "Natural & Pure",
      description: "We use only the finest bananas with no artificial preservatives or colors, ensuring pure goodness in every bite"
    },
    {
      icon: "⚡",
      title: "Quality First",
      description: "Every batch is carefully crafted and quality-tested before reaching customers worldwide"
    },
    {
      icon: "🤝",
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen to feedback from all continents and continuously improve"
    },
    {
      icon: "🌍",
      title: "Global Vision",
      description: "Committed to sustainable practices while sharing Indian culinary heritage with the world"
    }
  ]

  const globalStats = [
    { number: "50,000+", label: "Happy Customers Worldwide", icon: "😊" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "1,000,000+", label: "Packets Delivered", icon: "📦" },
    { number: "4.9/5", label: "Global Customer Rating", icon: "⭐" }
  ]

  const certifications = [
    { name: "ISO 22000:2018", description: "Food Safety Management", icon: "🛡️" },
    { name: "HACCP Certified", description: "Hazard Analysis Critical Control", icon: "✅" },
    { name: "Export Quality", description: "Government of India Approved", icon: "🇮🇳" },
    { name: "Organic Certified", description: "For Jaggery Products", icon: "🌿" }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-300 to-yellow-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        {/* Floating bananas */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${i * 1}s`,
            }}
          >
            🍌
          </div>
        ))}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-6 animate-bounce">🇮🇳</div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">About Chippyfy</h1>
            <p className="text-2xl text-white max-w-3xl mx-auto opacity-90 mb-8">
              From our humble beginnings in Nashik, Maharashtra to becoming India's beloved global banana chips brand - 
              discover our journey of bringing authentic Indian flavors to 50+ countries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🏭 Made in India</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🌍 Loved Globally</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🏆 Award Winning</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🤝 Family Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                🇮🇳 Our Story
              </span>
              <h2 className="text-5xl font-bold text-gray-800 mb-8">From Nashik to the World</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  It all started in 2020 when founders <strong className="text-gray-800">Amol and Pratik Patil </strong> 
                  realized there was a massive opportunity to share India's authentic banana chip heritage with the world. 
                  Growing up in Maharashtra, they were surrounded by the tradition of banana cultivation and processing, 
                  but wanted to elevate it to meet international standards.
                </p>
                <p>
                  What began as a small operation in Nashik has transformed into a global phenomenon. We've maintained 
                  our unwavering commitment to traditional recipes while embracing modern technology and international 
                  quality standards. Every packet that leaves our facility carries the essence of Maharashtra's 
                  agricultural heritage.
                </p>
                <p>
                  Today, Chippyfy represents the perfect harmony between Indian authenticity and global excellence. 
                  From supporting local farmers in Maharashtra to delighting families in New York, London, and Sydney - 
                  we've built bridges of taste that connect cultures across continents.
                </p>
                <p>
                  Our mission extends beyond business; we're cultural ambassadors sharing India's rich culinary heritage 
                  while creating sustainable livelihoods for farming communities back home.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-12 shadow-2xl">
                <div className="text-9xl mb-6">🏆</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Award Winning Journey</h3>
                <p className="text-xl text-gray-600 mb-8">Recognized internationally for excellence and innovation</p>
                
                <div className="grid grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                      <div className="text-3xl mb-2">{cert.icon}</div>
                      <h4 className="font-bold text-sm text-gray-800">{cert.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Our Global Impact</h2>
            <p className="text-2xl text-white opacity-90">Numbers that tell our worldwide success story</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {globalStats.map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              🌟 Our Values
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">The Principles That Guide Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From our headquarters in India to customers worldwide, these values shape every decision we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              👥 Leadership Team
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Meet Our Visionary Founders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dynamic duo behind Chippyfy's global success story, rooted in Maharashtra's entrepreneurial spirit
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6">{member.image}</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-xl text-yellow-600 font-semibold mb-4">{member.position}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{member.quote}"</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">🎯 Key Achievements:</h4>
                  <div className="space-y-3">
                    {member.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✅</span>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              📈 Our Journey
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Milestones That Shaped Our Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a local startup to a global brand - every milestone represents our commitment to excellence
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-400"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{milestone.icon}</span>
                        <div className="text-3xl font-bold text-yellow-600">{milestone.year}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-center p-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl">
              <div className="text-8xl mb-8">🎯</div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide the highest quality, most delicious banana chips while supporting local farmers in Maharashtra 
                and promoting healthy snacking habits across the globe. We're committed to bringing joy and satisfaction 
                with every crispy bite, from our home in India to families worldwide.
              </p>
            </div>
            
            <div className="text-center p-12 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl shadow-2xl">
              <div className="text-8xl mb-8">🔮</div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the world's most loved and trusted snack brand, known for innovation, quality, and 
                customer satisfaction. We envision a future where Chippyfy is synonymous with premium healthy 
                snacking globally, while remaining deeply rooted in our Indian heritage and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-8">🌍</div>
            <h2 className="text-5xl font-bold mb-6">Our Global Footprint</h2>
            <p className="text-2xl opacity-90 mb-12">
              From the bustling streets of Mumbai to the quiet suburbs of Sydney, from the cafes of London to the offices of New York - 
              Chippyfy has become a beloved snack brand that brings people together through authentic Indian flavors.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">🌏</div>
                <h3 className="text-2xl font-bold mb-3">Asia Pacific</h3>
                <p className="opacity-90">Australia, Singapore, Japan, Malaysia</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-3">Europe</h3>
                <p className="opacity-90">UK, Germany, France, Netherlands</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">🌎</div>
                <h3 className="text-2xl font-bold mb-3">Americas</h3>
                <p className="opacity-90">USA, Canada, Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-black">
            <div className="text-8xl mb-8">🤝</div>
            <h2 className="text-5xl font-bold mb-6">Join Our Global Family</h2>
            <p className="text-2xl mb-12 opacity-90">
              Experience the authentic taste of India, crafted with love in Maharashtra and delivered fresh to your doorstep, 
              wherever you are in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/products" className="bg-black text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                🛒 Taste Our Products
              </a>
              <a href="/contact" className="border-2 border-black text-black font-bold py-4 px-8 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                📞 Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </>
  )
}
