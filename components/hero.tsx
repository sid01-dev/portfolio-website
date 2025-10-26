"use client"

export default function Hero() {
  return (
    <section id="about" className="mb-8 animate-fade-in-up">
      <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-2xl border border-primary/30 p-8 backdrop-blur-sm">
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">
              Siddhesh Kiran{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gaikwad</span>
            </h1>
            <p className="text-lg text-primary font-semibold">Student Developer at SRM IST</p>
          </div>

          <p className="text-base text-foreground/70 leading-relaxed">
            Passionate about building robust backend systems and solving complex problems with code. Experienced in
            Java, Python, and Django with a focus on creating scalable applications.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://github.com/sid01-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-gaikwad10/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-primary/50 text-primary rounded-full hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://www.hackerrank.com/profile/sid01_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-accent/50 text-accent rounded-full hover:bg-accent/10 transition-all duration-300 text-sm font-medium"
            >
              HackerRank
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
