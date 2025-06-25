'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote, Heart, Shield, Users, Activity } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function AboutPage() {
  // Testimonial auto-slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      quote: "The team at Empathy For Life And Welfare saved my brothers life. Their dedication is unmatched.",
      author: "Ananya R.",
      role: "Family member"
    },
    {
      quote: "After 15 years of addiction, I found hope here. The counselors understood my struggle like no one else.",
      author: "Vikram J.",
      role: "18 months sober"
    },
    {
      quote: "As a doctor, I refer patients here because of their evidence-based approach and compassionate care.",
      author: "Dr. Sen",
      role: "Medical professional"
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
      {/* Hero Section with Background Image */}
      
<section className="relative bg-white py-5 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Background Video */}
          <div className="relative h-[350px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            >
              <source src="/vid3.mp4" type="video/mp4" />
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
                 Our Story of Healing and Hope
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                Founded in 2023, we have dedicated ourselves to transforming lives through compassionate addiction treatment.
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
      {/* Our Mission Section */}
      <section id="our-mission" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Empathy For Life And Welfare Exists
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/img/1 (3).jpeg" // Replace with your mission image
                alt="Our mission in action"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Healing Kolkata, One Life at a Time
              </h3>
              <p className="text-gray-600 mb-6">
                In 2023, we recognized a critical need for compassionate, evidence-based addiction treatment in Barasat and surrounding areas. What began as a small facility has grown into a beacon of hope for hundreds seeking recovery.
              </p>
              <p className="text-gray-600 mb-6">
                Our name reflects our core belief: true recovery begins with empathy - for oneself, for others, and for the journey ahead.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-gray-700 italic">
                  &quot;We dont just treat addiction - we restore lives, rebuild families, and renew hope.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values shape every aspect of our treatment philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-10 h-10 text-amber-500" />,
                title: "Compassion First",
                description: "We meet each person where they are, without judgment, with genuine care and understanding."
              },
              {
                icon: <Shield className="w-10 h-10 text-amber-500" />,
                title: "Safety & Dignity",
                description: "Our facility provides a secure environment where every individuals dignity is respected."
              },
              {
                icon: <Users className="w-10 h-10 text-amber-500" />,
                title: "Family Involvement",
                description: "We believe healing extends beyond the individual to their support systems and communities."
              },
              {
                icon: <Activity className="w-10 h-10 text-amber-500" />,
                title: "Evidence-Based Care",
                description: "Our treatments are grounded in scientifically validated methods for lasting recovery."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Holistic Healing",
                description: "We address mind, body, and spirit for comprehensive wellness."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Community Focus",
                description: "Were committed to serving the Kolkata community with accessible, quality care."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Compassionate Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to your recovery journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Tapan Dutta",
                role: "Founder & Medical Director",
                bio: "With over 15 years in addiction medicine, Dr. Dutta leads our clinical team with expertise and compassion.",
                image: "/team1.jpg"
              },
              {
                name: "Ananya Chatterjee",
                role: "Head Counselor",
                bio: "Specializing in cognitive behavioral therapy with a focus on trauma-informed care.",
                image: "/team2.jpg"
              },
              {
                name: "Rahul Bannerjee",
                role: "Clinical Psychologist",
                bio: "Expert in dual diagnosis treatment and motivational interviewing techniques.",
                image: "/team3.jpg"
              },
              {
                name: "Priyanka Mondal",
                role: "Aftercare Coordinator",
                bio: "Ensures seamless transition and ongoing support post-treatment.",
                image: "/team4.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
      <p className="text-gray-100">Hear from those who have  walked the path to recovery with us</p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 relative">
      <Quote className="text-gray-200 absolute top-4 left-4" size={40} />
      <div className="min-h-[200px] flex flex-col justify-center">
        <p className="text-xl text-gray-700 mb-6">&quot;{testimonials[currentTestimonial].quote}&quot;</p>
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

      {/* Facility Tour Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Healing Environment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for comfort, safety, and effective recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Therapy Rooms",
                description: "Private spaces for individual counseling sessions",
                image: "/img/1 (2).jpeg"
              },
              {
                title: "Group Therapy Area",
                description: "Comfortable setting for shared healing experiences",
                image: "/img/1 (3).jpeg"
              },
              {
                title: "Meditation Garden",
                description: "Peaceful outdoor space for reflection and mindfulness",
                image: "/img/1 (4).jpeg"
              },
              {
                title: "Dining & Nutrition",
                description: "Healthy meals prepared to support physical recovery",
                image: "/img/1 (5).jpeg"
              },
              {
                title: "Recreation Area",
                description: "Space for relaxation and positive social interaction",
                image: "/img/1 (6).jpeg"
              },
              {
                title: "Medical Wing",
                description: "Fully equipped for safe detox and medical care",
                image: "/img/1 (7).jpeg"
              }
            ].map((item, index) => (
              <div key={index} className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Recovery starts with a single step. Let us walk the path with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-amber-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full shadow-lg transition"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full shadow-lg transition"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}