import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const classes = [
  "Хатха-йога (начинающие)",
  "Хатха-йога (средний)",
  "Виньяса-флоу",
  "Пилатес (начинающие)",
  "Пилатес (все уровни)",
  "Восстановительная йога",
  "Йога-нидра",
  "Медитация и дыхание",
  "Индивидуальное занятие",
]

const formats = ["Онлайн", "Офлайн"]

export function Booking() {
  const [isVisible, setIsVisible] = useState(false)
  const [format, setFormat] = useState("Онлайн")
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", cls: "", comment: "" })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="booking" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Онлайн-запись
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Первое занятие — бесплатно
            </h2>
            <p className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Оставьте заявку, я свяжусь с вами в течение часа и подберём удобное время. Никаких обязательств — просто попробуйте.
            </p>

            {/* Benefits */}
            <div className={`space-y-5 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { icon: "CheckCircle", text: "Пробное занятие бесплатно" },
                { icon: "Users", text: "Группы до 8 человек или индивидуально" },
                { icon: "Wifi", text: "Онлайн или в студии на Садовой, 12" },
                { icon: "RefreshCw", text: "Гибкая отмена за 3 часа" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <Icon name={item.icon} size={18} className="text-sage shrink-0" />
                  <p className="text-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-6">
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center">
                  <Icon name="CheckCircle" size={32} className="text-sage" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">Заявка отправлена!</h3>
                <p className="text-muted-foreground max-w-xs leading-relaxed">
                  Анна свяжется с вами в течение часа. Проверьте мессенджер или телефон.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", cls: "", comment: "" }) }}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-4"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Format toggle */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Формат</p>
                  <div className="flex gap-0">
                    {formats.map((f) => (
                      <button
                        type="button"
                        key={f}
                        onClick={() => setFormat(f)}
                        className={`flex-1 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                          format === f
                            ? "bg-sage text-primary-foreground"
                            : "border border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">Имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">Телефон или Telegram</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    placeholder="+7 900 000 00 00 или @username"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">Занятие</label>
                  <select
                    value={form.cls}
                    onChange={(e) => setForm({ ...form, cls: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-sage focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Выберите практику</option>
                    {classes.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widests uppercase text-muted-foreground mb-3">Комментарий</label>
                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    rows={3}
                    placeholder="Расскажите о себе и своих целях..."
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  Отправить заявку
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
