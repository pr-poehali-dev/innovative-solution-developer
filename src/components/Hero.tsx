import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Личный тренер · Йога и пилатес
            </p>

            <h1
              className={`font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-6 text-balance transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Анна
              <span className="block text-sage italic">Северова</span>
            </h1>

            <p
              className={`text-lg text-muted-foreground max-w-md leading-relaxed mb-10 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Помогаю людям найти баланс через йогу и пилатес. 7 лет практики, 500+ учеников.
              Индивидуальный подход — без давления, без сравнений.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
              >
                Записаться на занятие
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                Обо мне
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`relative transition-all duration-1200 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/61a40589-5d95-4718-9b9a-d4292eac7df2/files/f283b082-8d04-4f9c-bf57-8d6c88365468.jpg"
                alt="Анна Северова — личный тренер по йоге и пилатесу"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-terracotta/80" />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 shadow-sm">
              <p className="font-serif text-2xl text-sage">7+</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">лет опыта</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}
