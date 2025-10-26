"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </main>
  )
}
