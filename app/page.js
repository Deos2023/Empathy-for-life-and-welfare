'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [concern, setConcern] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello, I'm ${name}. My number is ${phone}. I need help with ${concern}. Please contact me.`
    const whatsappURL = `https://wa.me/918910806466?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }
  // Testimonial auto-slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      quote: "Empathy For Life And Welfare gave me my life back. Their compassionate approach made all the difference in my recovery journey.",
      author: "Rahul S.",
      role: "2 years sober"
    },
    {
      quote: "The family therapy sessions helped heal relationships I thought were broken forever. Grateful for their holistic approach.",
      author: "Priya M.",
      role: "Patient's family member"
    },
    {
      quote: "After trying multiple centers, this was the first place that treated me with genuine care and understanding.",
      author: "Amit K.",
      role: "1 year sober"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-white py-5 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Background Video */}
          <div className="relative h-[500px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            >
              <source src="/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-3xl z-10"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              <Image
                src="/logo.png"
                alt="Empathy For Life And Welfare"
                width={100}
                height={100}
                className="mb-6"
              />
              <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
                Reclaim Your Life From Addiction
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                Since 2023, we've helped hundreds overcome substance dependence through compassionate, evidence-based care.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
              >
                Begin Your Recovery <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="/img/1 (1).jpeg" alt="about" width={500} height={500} className="rounded-2xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission at Empathy For Life And Welfare</h2>
            <p className="text-gray-600 mb-4">
              Established in 2023, we provide comprehensive rehabilitation services for substance abuse and behavioral addictions. Our center in Barasat, Kolkata offers a sanctuary for healing and transformation.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-gray-700 italic">
                "Recovery is not about perfection. It's about progress, support, and rediscovering your strength."
              </p>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Medically supervised detoxification</li>
              <li>✓ Individual and group therapy sessions</li>
              <li>✓ Family counseling and education</li>
              <li>✓ Aftercare and relapse prevention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Holistic Treatment Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We address addiction through multiple dimensions of wellness for comprehensive healing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Care",
                description: "Safe detoxification and medication management under medical supervision",
                icon: "🩺"
              },
              {
                title: "Psychological Support",
                description: "Evidence-based therapies to address root causes of addiction",
                icon: "🧠"
              },
              {
                title: "Social Rehabilitation",
                description: "Rebuilding relationships and developing healthy social skills",
                icon: "🤝"
              },
              {
                title: "Vocational Training",
                description: "Skill development for successful reintegration into society",
                icon: "🛠️"
              },
              {
                title: "Spiritual Growth",
                description: "Finding meaning and purpose beyond addiction",
                icon: "🕊️"
              },
              {
                title: "Aftercare Planning",
                description: "Continued support for long-term recovery success",
                icon: "📅"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <div className='bg-white p-16'>
        <section className="bg-[#dfdfdf] py-20 px-6 rounded-[30px] p-20">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="md:flex justify-between items-start mb-12">
              <div>
                <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">Our Programs</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Comprehensive Addiction Treatment Services
                </h2>
              </div>
              <p className="text-gray-600 md:max-w-md mt-4 md:mt-0">
                We offer structured programs tailored to individual needs, from initial detox to long-term aftercare.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Medical Detoxification",
                  desc: "Safe, supervised withdrawal management with medical support.",
                  icon: "💊",
                  color: "bg-white",
                  highlight: false,
                },
                {
                  title: "Residential Program",
                  desc: "30-90 day immersive treatment in our therapeutic community.",
                  icon: "🏠",
                  color: "bg-[#c38a5f]",
                  highlight: true,
                },
                {
                  title: "Outpatient Services",
                  desc: "Flexible treatment for those maintaining work/family commitments.",
                  icon: "🔄",
                  color: "bg-white",
                  highlight: false,
                },
                {
                  title: "Family Therapy",
                  desc: "Healing relationships and educating family members about addiction.",
                  icon: "👨‍👩‍👧‍👦",
                  color: "bg-white",
                  highlight: false,
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} ${
                    item.highlight ? "text-white" : "text-gray-800"
                  } p-6 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.desc}</p>
                  <a
                    href="#contact"
                    className={`font-medium text-sm flex items-center gap-1 ${
                      item.highlight ? "text-white" : "text-amber-600"
                    }`}
                  >
                    Contact Us →
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-sm text-center text-gray-700 mt-10">
              <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium mr-2">Confidential</span>
              All consultations are private and confidential - {" "}
              <a href="#contact" className="text-amber-600 font-semibold hover:text-amber-700">
                reach out without hesitation
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
     <section
  className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/rehx.webp')", // Path to your background image
  }}
>
  {/* Black Smoke Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl text-white font-bold mb-4">Stories of Hope and Recovery</h2>
      <p className="text-gray-100">Hear from those who've walked the path to recovery with us</p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 relative">
      <Quote className="text-gray-200 absolute top-4 left-4" size={40} />
      <div className="min-h-[200px] flex flex-col justify-center">
        <p className="text-xl text-gray-700 mb-6">"{testimonials[currentTestimonial].quote}"</p>
        <div>
          <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
          <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 rounded-full ${currentTestimonial === index ? 'bg-amber-500' : 'bg-gray-300'}`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="relative bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-center md:text-left">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold text-amber-700 mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-700 inline-block" />
              OUR DIFFERENCE
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Sets Empathy For Life And Welfare Apart
            </h2>

            <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
              Our center combines clinical excellence with genuine compassion to create lasting change.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Experienced Professionals</h4>
                  <p className="text-gray-600 text-sm">
                    Our team includes doctors, psychologists, and counselors specializing in addiction treatment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Personalized Treatment Plans</h4>
                  <p className="text-gray-600 text-sm">
                    Each program is customized based on comprehensive assessments and ongoing evaluations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Proven Treatment Modalities</h4>
                  <p className="text-gray-600 text-sm">
                    We utilize evidence-based therapies that have demonstrated effectiveness in addiction treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/doc.png"
                alt="Doctors"
                width={400}
                height={400}
                className="w-full h-auto mx-auto"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl px-5 py-4 flex items-center gap-4">
                <p className="text-sm font-medium text-gray-800">
                  Serving Kolkata with <span className="text-amber-600 font-bold">Compassionate Care</span> Since 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Types We Treat */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Addictions We Specialize In</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide treatment for various substance and behavioral addictions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Alcohol Addiction",
                description: "Comprehensive treatment for alcohol dependence and abuse",
                icon: "🍷"
              },
              {
                title: "Drug Addiction",
                description: "Treatment for opioids, cannabis, prescription drugs and other substances",
                icon: "💉"
              },
              {
                title: "Behavioral Addictions",
                description: "Addressing gambling, gaming, and other compulsive behaviors",
                icon: "🎰"
              },
              {
                title: "Dual Diagnosis",
                description: "Treating addiction alongside mental health conditions",
                icon: "🧠"
              },
              {
                title: "Prescription Drug Abuse",
                description: "Specialized care for dependency on prescription medications",
                icon: "💊"
              },
              {
                title: "Relapse Prevention",
                description: "Strategies and support to maintain long-term sobriety",
                icon: "🛡️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Begin Your Recovery Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Taking the first step is often the hardest. We're here to make it easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Contact Info */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">Call Us Anytime</p>
                  <p className="text-gray-600">Mobile: <a href="tel:8910806466" className="hover:text-amber-600">8910806466</a></p>
                  <p className="text-gray-600">Landline: 033-31697903</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:tapandutta9088@gmail.com" className="text-gray-600 hover:text-amber-600">tapandutta9088@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-gray-600">TALIKHOLA, BARRACKPORE RD, BARASAT, KOLKATA - 700126</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-amber-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Ready to Take the First Step?</h3>
            <p className="text-gray-700 mb-6">
              Complete this form and our team will contact you within 24 hours to discuss treatment options.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">Primary Concern</label>
                <select
                  id="concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select an option</option>
                  <option value="Alcohol Addiction">Alcohol Addiction</option>
                  <option value="Drug Addiction">Drug Addiction</option>
                  <option value="Behavioral Addiction">Behavioral Addiction</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg shadow transition">
                Request Call Back via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    </main>
  )
}