'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HeartPulse, Shield, Users, Activity, CalendarCheck, Home, PhoneCall, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('residential')

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
                       Our Comprehensive Treatment Programs
                    </h1>
                    <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                      Evidence-based, compassionate care tailored to each individual's recovery journey
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

      {/* Treatment Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Holistic Treatment Approach
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/img/1 (5).jpeg"
                alt="Treatment approach"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Personalized Paths to Lasting Recovery
              </h3>
              <p className="text-gray-600 mb-6">
                At Empathy For Life And Welfare, we understand that addiction affects each person differently. 
                Our treatment programs combine medical expertise with psychological care and social support to 
                address all aspects of recovery.
              </p>
              
              <div className="space-y-4">
                {[
                  "Medical detoxification supervised by experienced physicians",
                  "Individualized treatment plans based on comprehensive assessments",
                  "Evidence-based therapies combined with innovative approaches",
                  "Dual diagnosis treatment for co-occurring mental health conditions",
                  "Aftercare planning for sustained recovery"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <HeartPulse className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Treatment Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive care options tailored to different recovery needs
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {[
              { id: 'residential', label: 'Residential Program' },
              { id: 'outpatient', label: 'Outpatient Program' },
              { id: 'detox', label: 'Medical Detox' },
              { id: 'aftercare', label: 'Aftercare Support' },
              { id: 'family', label: 'Family Program' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${activeTab === tab.id ? 'bg-amber-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Residential Program */}
            {activeTab === 'residential' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Residential Treatment Program</h3>
                  <p className="text-gray-600 mb-6">
                    Our 30-90 day inpatient program provides intensive care in a supportive, structured environment. 
                    Ideal for those needing to step away from triggers and focus completely on recovery.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "24/7 medical supervision and support",
                      "Private or shared accommodation options",
                      "Daily individual and group therapy sessions",
                      "Holistic therapies including yoga and meditation",
                      "Nutritionally balanced meals",
                      "Recreational and fitness activities"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                          <Shield className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
                  >
                    Enquire About Admission <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/img/1 (2).jpeg"
                    alt="Residential program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Outpatient Program */}
            {activeTab === 'outpatient' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Outpatient Treatment Program</h3>
                  <p className="text-gray-600 mb-6">
                    Flexible treatment options that allow you to maintain work and family commitments while 
                    receiving professional support for recovery.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "3-5 therapy sessions per week",
                      "Evening and weekend options available",
                      "Individual counseling sessions",
                      "Group therapy and support groups",
                      "Family therapy sessions",
                      "Progress monitoring and adjustment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                          <CalendarCheck className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
                  >
                    Schedule Assessment <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/img/1 (3).jpeg"
                    alt="Outpatient program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Medical Detox */}
            {activeTab === 'detox' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Medical Detoxification</h3>
                  <p className="text-gray-600 mb-6">
                    Safe, comfortable detox under 24/7 medical supervision to manage withdrawal symptoms 
                    and prepare for ongoing treatment.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Medically supervised withdrawal management",
                      "Individualized medication protocols",
                      "24/7 nursing care",
                      "Psychological support during detox",
                      "Seamless transition to rehabilitation",
                      "Private, comfortable rooms"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                          <HeartPulse className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
                  >
                    Urgent Help Needed? Call Now <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/img/1 (7).jpeg"
                    alt="Medical detox"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Aftercare Support */}
            {activeTab === 'aftercare' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Aftercare & Relapse Prevention</h3>
                  <p className="text-gray-600 mb-6">
                    Our support continues after treatment ends with comprehensive aftercare planning to 
                    maintain long-term sobriety.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Personalized aftercare plans",
                      "Weekly alumni support groups",
                      "Sober living referrals",
                      "Continuing care sessions",
                      "Recovery coaching",
                      "24/7 counselor access for emergencies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                          <Home className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
                  >
                    Learn About Aftercare <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/img/1 (6).jpeg"
                    alt="Aftercare support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Family Program */}
            {activeTab === 'family' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Family Education & Support</h3>
                  <p className="text-gray-600 mb-6">
                    Addiction affects the whole family. Our program helps families heal and develop 
                    healthy communication and boundaries.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Family therapy sessions",
                      "Educational workshops",
                      "Support groups for family members",
                      "Intervention planning assistance",
                      "Recovery skills for families",
                      "Healing from codependency"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                          <Users className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
                  >
                    Support for Families <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/img/1 (4).jpeg"
                    alt="Family program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Evidence-Based Therapies We Offer
      </h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Cognitive Behavioral Therapy (CBT)",
          description: "Identify and change negative thought patterns and behaviors related to substance use.",
          icon: <Activity className="w-10 h-10 text-amber-500" />
        },
        {
          title: "Motivational Interviewing",
          description: "Enhance motivation to change by resolving ambivalence about recovery.",
          icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Dialectical Behavior Therapy",
          description: "Develop skills in mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.",
          icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          )
        },
        {
          title: "Group Therapy",
          description: "Share experiences and gain support from peers in recovery under professional guidance.",
          icon: <Users className="w-10 h-10 text-amber-500" />
        },
        {
          title: "Mindfulness & Meditation",
          description: "Develop awareness and coping strategies to manage cravings and stress.",
          icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7a4 4 0 1 0 8 0m-4 4a4 4 0 000 8m-6-12h12m-6 6h12m-12 6h12" />
            </svg>
          )
        },
        {
          title: "Family Systems Therapy",
          description: "Address family dynamics and improve communication to support recovery.",
          icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ].map((therapy, index) => (
        <div
          key={index}
          className="
            relative bg-white p-8 rounded-2xl border border-white/10
            shadow-[0_25px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_35px_80px_rgba(0,0,0,0.1)]
            transform transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]
            hover:-translate-y-3
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100
            after:absolute after:inset-0 after:rounded-2xl after:bg-white/10 after:blur-2xl after:opacity-0 hover:after:opacity-100
            overflow-hidden
          "
        >
          {/* Soft Light Effect Circle */}
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/30 blur-2xl opacity-20" />

          <div className="relative z-10">
            <div className="mb-4">{therapy.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{therapy.title}</h3>
            <p className="text-gray-600">{therapy.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Addiction Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Substances & Behaviors We Treat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive care for various forms of addiction
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Alcohol Addiction",
                description: "Treatment for alcohol dependence and withdrawal management",
                icon: "🍷"
              },
              {
                title: "Drug Addiction",
                description: "Including opioids, cocaine, methamphetamines, and prescription drugs",
                icon: "💊"
              },
              {
                title: "Cannabis/Marijuana",
                description: "Treatment for cannabis use disorder and dependency",
                icon: "🌿"
              },
              {
                title: "Behavioral Addictions",
                description: "Gambling, gaming, internet, and other compulsive behaviors",
                icon: "🎰"
              },
              {
                title: "Dual Diagnosis",
                description: "Co-occurring mental health and substance use disorders",
                icon: "🧠"
              },
              {
                title: "Prescription Drugs",
                description: "Benzodiazepines, stimulants, and pain medication addiction",
                icon: "💉"
              },
              {
                title: "Tobacco/Nicotine",
                description: "Smoking cessation programs and support",
                icon: "🚬"
              },
              {
                title: "Polysubstance Abuse",
                description: "Treatment for multiple substance dependencies",
                icon: "⚠️"
              }
            ].map((addiction, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{addiction.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{addiction.title}</h3>
                <p className="text-gray-600 text-sm">{addiction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Simple Admission Process
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Call or message us for a confidential consultation",
                icon: <PhoneCall className="w-8 h-8 text-amber-500" />
              },
              {
                step: "2",
                title: "Assessment",
                description: "Comprehensive evaluation by our clinical team",
                icon: <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              },
              {
                step: "3",
                title: "Treatment Plan",
                description: "Personalized program recommendations",
                icon: <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              },
              {
                step: "4",
                title: "Begin Treatment",
                description: "Start your journey to recovery",
                icon: <Clock className="w-8 h-8 text-amber-500" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-gray-100 text-amber-500 font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      {/* <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Insurance & Payment Options</h2>
              <p className="text-gray-600 mb-6">
                We believe quality addiction treatment should be accessible. We work with most major insurance 
                providers and offer flexible payment plans.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Insurance verification assistance",
                  "Flexible payment plans available",
                  "Discounts for upfront payment",
                  "Sliding scale options for those in need",
                  "Transparent pricing with no hidden fees"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full shadow transition"
              >
                Verify Your Insurance <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "Do you accept my insurance?",
                    answer: "We work with most major providers. Contact us to verify your coverage."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "Cash, credit cards, bank transfers, and insurance payments."
                  },
                  {
                    question: "Are there financing options?",
                    answer: "Yes, we offer flexible payment plans to make treatment affordable."
                  },
                  {
                    question: "Is treatment confidential?",
                    answer: "Absolutely. We adhere to strict confidentiality laws and standards."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-800 mb-1">{item.question}</h4>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Recovery is possible. Our team is ready to help you or your loved one begin the journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-amber-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full shadow-lg transition"
            >
              Call Now: 8910806466
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full shadow-lg transition"
            >
              Request a Call Back
            </Link>
          </div>
          <div className="mt-8 text-sm">
            <p>24/7 Admissions Support • Confidential Assessment • Immediate Assistance</p>
          </div>
        </div>
      </section>
    </main>
  )
}