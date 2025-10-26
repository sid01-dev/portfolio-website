"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            SK
          </Link>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
