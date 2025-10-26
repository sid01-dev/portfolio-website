"use client"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather Forecast Management System",
      description:
        "Real-time weather forecasting web application using Python and Django. Get accurate weather predictions for any location with an intuitive interface.",
      tech: ["Python", "Django", "Weather API"],
      link: "https://github.com/sid01-dev/project-weather-management-system",
      image: "/weather-forecast-dashboard.jpg",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "University Course Registration System",
      description:
        "Full-featured course registration system built with Spring Boot and MySQL. Students can register, view courses, and enroll while respecting credit limits and capacity constraints.",
      tech: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/sid01-dev/project-university-course-registration",
      image: "/course-registration-system-interface.jpg",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  return (
    <section id="projects" className="mb-8 space-y-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-balance">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div className={`h-56 bg-gradient-to-br ${project.color} overflow-hidden relative`}>
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-semibold group/link"
            >
              View on GitHub
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
