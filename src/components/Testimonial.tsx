import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    quote:
      "Я пришла с болью в спине и полным отсутствием гибкости. Через два месяца забыла о боли, а ещё через два — впервые в жизни почувствовала, что живу в своём теле, а не против него.",
    name: "Марина С.",
    detail: "Ученица студии, 8 месяцев практики",
  },
  {
    quote:
      "Никогда не думал, что йога — это моё. Пришёл за советом врача после травмы колена. Остался, потому что это работает. Тело стало другим, голова — яснее.",
    name: "Дмитрий К.",
    detail: "Занимается пилатесом, 6 месяцев",
  },
  {
    quote:
      "После первого же занятия поняла: вот оно. Никакого давления, никаких сравнений — только ты и коврик. Преподаватели чувствуют каждого ученика. Это редкость.",
    name: "Ольга В.",
    detail: "Хатха-йога, 1 год практики",
  },
  {
    quote:
      "Занимаюсь онлайн три раза в неделю из другого города. Качество занятий — как будто ты в зале. За полгода ушли тревога и хроническое напряжение в плечах.",
    name: "Екатерина Р.",
    detail: "Онлайн-ученица, 5 месяцев",
  },
]

export function Testimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Отзывы</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground">Истории учеников</h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Quote icon */}
          <svg className="w-12 h-12 mx-auto text-primary-foreground/25 mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote
            key={current}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground leading-relaxed mb-10 text-balance max-w-3xl mx-auto animate-fade-in"
          >
            {testimonials[current].quote}
          </blockquote>

          <p className="text-sm tracking-widest uppercase text-primary-foreground/80 mb-1">
            {testimonials[current].name}
          </p>
          <p className="text-sm text-primary-foreground/60">{testimonials[current].detail}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-14">
          <button
            onClick={prev}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
            aria-label="Предыдущий отзыв"
          >
            <Icon name="ArrowLeft" size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/30"
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
            aria-label="Следующий отзыв"
          >
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
