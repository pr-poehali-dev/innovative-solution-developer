import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

const schedule: Record<string, { time: string; title: string; level: string; spots: number }[]> = {
  Пн: [
    { time: "08:00", title: "Хатха-йога", level: "Начинающие", spots: 4 },
    { time: "10:30", title: "Пилатес", level: "Все уровни", spots: 2 },
    { time: "19:00", title: "Йога-нидра", level: "Все уровни", spots: 6 },
  ],
  Вт: [
    { time: "07:30", title: "Пилатес", level: "Продвинутые", spots: 3 },
    { time: "12:00", title: "Хатха-йога", level: "Все уровни", spots: 5 },
    { time: "20:00", title: "Восстановительная йога", level: "Все уровни", spots: 8 },
  ],
  Ср: [
    { time: "08:00", title: "Хатха-йога", level: "Начинающие", spots: 4 },
    { time: "10:30", title: "Пилатес", level: "Все уровни", spots: 1 },
    { time: "18:30", title: "Виньяса-флоу", level: "Средний", spots: 5 },
  ],
  Чт: [
    { time: "07:30", title: "Пилатес", level: "Все уровни", spots: 6 },
    { time: "12:00", title: "Хатха-йога", level: "Средний", spots: 3 },
    { time: "19:30", title: "Медитация и дыхание", level: "Все уровни", spots: 10 },
  ],
  Пт: [
    { time: "08:00", title: "Виньяса-флоу", level: "Средний", spots: 4 },
    { time: "10:00", title: "Пилатес", level: "Начинающие", spots: 5 },
    { time: "19:00", title: "Хатха-йога", level: "Все уровни", spots: 7 },
  ],
  Сб: [
    { time: "10:00", title: "Йога в потоке", level: "Все уровни", spots: 8 },
    { time: "12:30", title: "Пилатес + стретч", level: "Все уровни", spots: 6 },
  ],
}

const levelColor: Record<string, string> = {
  "Начинающие": "text-sage bg-sage/10",
  "Все уровни": "text-terracotta bg-terracotta/10",
  "Средний": "text-indigo bg-indigo/10",
  "Продвинутые": "text-foreground bg-muted",
}

export function Schedule() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeDay, setActiveDay] = useState("Пн")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="schedule" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Расписание
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Занятия на неделю
          </h2>
        </div>

        {/* Day Tabs */}
        <div className={`flex gap-1 mb-10 overflow-x-auto pb-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-shrink-0 px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                activeDay === day
                  ? "bg-sage text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes */}
        <div className={`space-y-px bg-border transition-all duration-700 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {schedule[activeDay].map((cls, i) => (
            <div
              key={i}
              className="group bg-background hover:bg-card transition-colors duration-300 p-6 lg:p-8"
            >
              {/* Top row: time + title + badge */}
              <div className="flex items-start gap-4 mb-4">
                <p className="font-serif text-xl text-stone/60 group-hover:text-sage transition-colors duration-300 w-14 shrink-0 pt-0.5">
                  {cls.time}
                </p>
                <div className="min-w-0">
                  <p className="font-serif text-xl text-foreground mb-1.5 leading-tight">{cls.title}</p>
                  <span className={`text-xs tracking-widest uppercase px-2 py-0.5 ${levelColor[cls.level] ?? "text-muted-foreground bg-muted"}`}>
                    {cls.level}
                  </span>
                </div>
              </div>
              {/* Bottom row: spots + button */}
              <div className="flex items-center justify-between pl-18 gap-4" style={{ paddingLeft: "3.5rem" }}>
                <p className={`text-sm ${cls.spots <= 2 ? "text-terracotta" : "text-sage"}`}>
                  {cls.spots === 0 ? "Мест нет" : `${cls.spots} места свободно`}
                </p>
                <a
                  href="#booking"
                  className={`inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 shrink-0 ${
                    cls.spots === 0
                      ? "text-muted-foreground border border-border cursor-not-allowed"
                      : "bg-sage text-primary-foreground hover:bg-sage/90"
                  }`}
                >
                  <Icon name="Calendar" size={13} />
                  Записаться
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-xs text-muted-foreground mt-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Все занятия проходят онлайн и офлайн · Продолжительность 60 минут
        </p>
      </div>
    </section>
  )
}