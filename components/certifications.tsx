"use client"

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AI Intelligent Workshop",
      issuer: "IBM SkillsBuild",
      date: "Oct 2025",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Siddhesh%20Completion%20Certificate%20_%20SkillsBuild_251018_215433.pdf-P4srtXNb9Dkx6zNhppcbCQr4CjnePt.png",
    },
    {
      id: 2,
      title: "Hacktrax Hackathon",
      issuer: "Alexa Developers SRM",
      date: "2025",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIDDHESH%20KIRAN%20GAIKWAD%20%281%29-dC1uF08ZlTEpOYOLJ9YvKWyA8yJiqC.png",
    },
    {
      id: 3,
      title: "Fundamentals of OOP",
      issuer: "NPTEL (67%)",
      date: "Jan-Apr 2025",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-25%20180129-UGPKh7HksAgG7pwCBshX39cW7qq6l3.png",
    },
    {
      id: 4,
      title: "GenVision Workshop",
      issuer: "Alexa Developers SRM",
      date: "Sep 2025",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Siddhesh%20Kiran%20Gaikwad%20%282%29-C2ZaelrT0v6A9lZBYAwN9GeZlwmYnX.png",
    },
  ]

  return (
    <section id="certifications" className="mb-8 space-y-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-balance">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>{" "}
          & Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up cursor-pointer"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="h-40 bg-muted overflow-hidden relative">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold mb-1 line-clamp-2">{cert.title}</h3>
              <p className="text-primary text-xs font-semibold mb-1">{cert.issuer}</p>
              <p className="text-foreground/50 text-xs">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 animate-fade-in-up">
        <h3 className="text-xl font-bold mb-6">Skills & Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-primary font-semibold mb-3 text-sm">Languages</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript/TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-3 text-sm">Frameworks & Tools</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Spring Boot</li>
              <li>Django</li>
              <li>MySQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-3 text-sm">Specializations</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Backend Development</li>
              <li>Database Design</li>
              <li>API Development</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
