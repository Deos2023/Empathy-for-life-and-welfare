'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    program: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendWhatsAppMessage = (e) => {
    e.preventDefault()
    
    const { name, phone, email, message, program } = formData
    const whatsappNumber = '918910806466' // Your WhatsApp number without '+' or '00'
    const text = `New Contact Request from Empathy Website:
    
Name: ${name}
Phone: ${phone}
Email: ${email}
Interested Program: ${program || 'Not specified'}

Message:
${message}`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      program: ''
    })
  }

  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
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
                       Contact Empathy For Life And Welfare
                    </h1>
                    <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                     Reach out today to begin your journey to recovery. We are available 24/7 to help.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="tel:8910806466"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-amber-600 font-medium px-6 py-3 rounded-full shadow transition"
              >
                <Phone size={20} /> Call Now
              </Link>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-full shadow transition"
              >
                <MessageCircle size={20} /> Send Message
              </Link>
            </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">TALIKHOLA, BARRACKPORE RD, BARASAT, KOLKATA - 700126</p>
                    <Link 
                      href="https://maps.google.com/?q=TALIKHOLA,BARRACKPORE+RD,BARASAT,KOLKATA+700126"
                      target="_blank"
                      className="inline-block mt-2 text-amber-600 hover:text-amber-700 font-medium"
                    >
                      View on Google Maps →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Mobile: <Link href="tel:8910806466" className="hover:text-amber-600">+91 8910806466</Link>
                      <br />
                      Landline: <Link href="tel:03331697903" className="hover:text-amber-600">033-31697903</Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:tapandutta9088@gmail.com" className="hover:text-amber-600">
                        tapandutta9088@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">24/7 Admissions:</span> Always available for emergencies
                      <br />
                      <span className="font-medium">Office Hours:</span> 9:00 AM - 8:00 PM (Daily)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Established</h3>
                    <p className="text-gray-600">March 17, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.894843052906!2d88.4678897!3d22.732149599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89900373d17fb%3A0x1f1b7a25944ab231!2sEmpathy%20For%20Life%20And%20Welfare!5e0!3m2!1sen!2sin!4v1750839562474!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Form Side */}
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and well contact you shortly. For immediate assistance, 
                  please call us directly.
                </p>

                <form onSubmit={sendWhatsAppMessage} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                      Program Interested In
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    >
                      <option value="">Select a program</option>
                      <option value="Residential Treatment">Residential Treatment</option>
                      <option value="Outpatient Program">Outpatient Program</option>
                      <option value="Medical Detox">Medical Detox</option>
                      <option value="Family Program">Family Program</option>
                      <option value="Aftercare Support">Aftercare Support</option>
                      <option value="Not sure">Not sure / Need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-4 rounded-lg shadow transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              </div>

              {/* Image Side */}
              <div className="hidden md:block relative bg-amber-500">
                <Image
                  src="/img/1 (3).jpeg" // Replace with your contact image
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="mb-6">
                    If you or a loved one is in crisis, dont wait. Call our 24/7 helpline now.
                  </p>
                  <Link
                    href="tel:8910806466"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-amber-600 font-medium px-6 py-3 rounded-full shadow transition w-fit"
                  >
                    <Phone size={20} /> Call 8910806466
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Medical Emergency?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If this is a medical emergency or crisis situation, please call immediately:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="tel:8910806466"
              className="inline-flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transition text-lg"
            >
              <Phone size={24} className="mr-2" /> Emergency Helpline: 8910806466
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}