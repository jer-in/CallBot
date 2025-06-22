"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Sun, Moon, PhoneCall, Heart, Clock, Lock, Menu, X, ArrowRight, Sparkles } from "lucide-react"

export default function CallBotLanding() {
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-scroll-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowThankYou(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div className="w-full h-full bg-noise"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                CallBot
              </span>
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-right">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("signup")}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-purple-600" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-gray-700/20">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("signup")}
                  className="text-left text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl pt-20">
          {/* Hero Section */}
          <section className="text-center py-20 md:py-32">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-8 shadow-2xl">
                <PhoneCall className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                  100% FREE FOREVER
                </span>
                <Sparkles className="w-5 h-5 text-pink-500" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Never Make Another
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Awkward Call</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                CallBot is your free AI assistant that handles phone calls for you. Perfect for introverts, busy
                professionals, or anyone who just hates being on the phone.{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Completely free, forever.</span>
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("signup")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </section>

          {/* Features Overview */}
          <section id="features" className="py-20">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Why Choose CallBot?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Take back control of your time and peace of mind with AI-powered calling
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: Heart,
                  title: "No More Anxiety",
                  description: "Let AI handle those awkward, stressful calls",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: CheckCircle,
                  title: "Handles Everything",
                  description: "Appointments, complaints, reservations & more",
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  icon: Lock,
                  title: "Privacy First",
                  description: "Your data stays secure and private",
                  gradient: "from-teal-500 to-cyan-500",
                },
                {
                  icon: Clock,
                  title: "Save Time",
                  description: "No more waiting on hold or phone tag",
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:transform hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Feature Sections */}
          <section id="how-it-works" className="py-20 space-y-32">
            {/* Feature 1: No More Anxiety */}
            <div
              id="feature-anxiety"
              data-scroll-section
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                visibleSections.has("feature-anxiety") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-xl">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Say Goodbye to Phone Anxiety
                  </span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  We understand that phone calls can be overwhelming. Whether you're an introvert, have social anxiety,
                  or simply prefer written communication, CallBot eliminates the stress of verbal conversations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>No more rehearsing:</strong> Stop practicing what you'll say before making calls
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Avoid awkward silences:</strong> CallBot handles conversation flow naturally
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Stay in control:</strong> You provide the script, CallBot executes perfectly
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-600 dark:text-gray-300">CallBot is dialing...</span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                        <p className="text-gray-800 dark:text-gray-200">
                          "Hi, I'd like to schedule a dentist appointment for next week..."
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-green-600 font-semibold">✓ Appointment booked!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Handles Everything */}
            <div
              id="feature-versatile"
              data-scroll-section
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                visibleSections.has("feature-versatile") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="lg:order-2 space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-xl">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Handles Any Type of Call
                  </span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  From simple appointments to complex customer service issues, CallBot adapts to any situation. Our AI
                  understands context and can handle even the most challenging conversations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Doctor appointments",
                    "Restaurant reservations",
                    "Customer complaints",
                    "Service cancellations",
                    "Insurance inquiries",
                    "Delivery scheduling",
                    "Hotel bookings",
                    "Technical support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    {[
                      { type: "Appointment", status: "Completed", color: "green" },
                      { type: "Complaint", status: "Resolved", color: "blue" },
                      { type: "Reservation", status: "Confirmed", color: "purple" },
                      { type: "Cancellation", status: "Processed", color: "orange" },
                    ].map((call, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 bg-${call.color}-500 rounded-full`}></div>
                            <span className="font-medium text-gray-800 dark:text-gray-200">{call.type}</span>
                          </div>
                          <span className={`text-${call.color}-600 text-sm font-semibold`}>{call.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Privacy First */}
            <div
              id="feature-privacy"
              data-scroll-section
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                visibleSections.has("feature-privacy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-xl">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Your Privacy is Sacred
                  </span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  We believe privacy is a fundamental right. CallBot operates with bank-level security, and you maintain
                  complete control over your data and conversations at all times.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Lock className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">End-to-End Encryption</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        All conversations are encrypted and never stored
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Lock className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">No Data Selling</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        We never sell or share your personal information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Lock className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">You're in Control</p>
                      <p className="text-gray-600 dark:text-gray-300">Delete your data anytime with one click</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Secure & Private</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>256-bit encryption</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Zero data retention</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>GDPR compliant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Save Time */}
            <div
              id="feature-time"
              data-scroll-section
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                visibleSections.has("feature-time") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="lg:order-2 space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Reclaim Your Precious Time
                  </span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Stop wasting hours on hold or playing phone tag. CallBot works 24/7, handles multiple calls
                  simultaneously, and gets results faster than traditional calling.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">5 min</div>
                    <div className="text-gray-600 dark:text-gray-300">Average call time with CallBot</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-gray-600 dark:text-gray-300">Available anytime, any day</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">0 min</div>
                    <div className="text-gray-600 dark:text-gray-300">Time spent on hold</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                    <div className="text-gray-600 dark:text-gray-300">Success rate on first try</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Time Saved This Week
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Monday</span>
                        <span className="font-semibold text-orange-600">2.5 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Tuesday</span>
                        <span className="font-semibold text-orange-600">1.8 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Wednesday</span>
                        <span className="font-semibold text-orange-600">3.2 hours</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between items-center font-bold">
                          <span className="text-gray-800 dark:text-gray-200">Total Saved</span>
                          <span className="text-red-600 text-xl">7.5 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Signup Section */}
          <section id="signup" className="py-20">
            <div className="max-w-lg mx-auto">
              {!showThankYou ? (
                <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardContent className="p-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-2 mb-4">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                        <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
                          COMPLETELY FREE
                        </span>
                        <Sparkles className="w-5 h-5 text-pink-500" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Ready to Get Started?
                        </span>
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Join thousands who've already said goodbye to phone anxiety
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                        />
                      </div>

                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-5 text-lg rounded-xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                      >
                        {isSubmitting ? "Joining..." : "Start Using CallBot Free"}
                        {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                      </Button>
                    </form>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">
                      No spam, ever. No credit card required. Free forever.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardContent className="p-10 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-8 shadow-xl">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Welcome to CallBot! 🎉
                      </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      Thanks for joining,{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{formData.name}</span>! We've
                      sent setup instructions to <span className="font-semibold">{formData.email}</span>.
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-8">
                      <p className="text-gray-700 dark:text-gray-300">
                        🚀 You can start making AI calls in less than 2 minutes!
                        <br />📧 Check your email for your personal CallBot link
                      </p>
                    </div>

                    <Button
                      onClick={() => {
                        setShowThankYou(false)
                        setFormData({ name: "", email: "" })
                      }}
                      variant="outline"
                      className="border-2 border-purple-200 hover:border-purple-300 text-purple-600 hover:text-purple-700"
                    >
                      Invite a Friend
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-12 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CallBot
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              © 2024 CallBot. Making phone calls less scary, one call at a time.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              Free forever. No hidden fees. No anxiety required.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
