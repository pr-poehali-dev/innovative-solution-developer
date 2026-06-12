import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const posts = [
  {
    date: "5 июня 2026",
    tag: "Практика",
    title: "Почему у вас болит спина — и как йога помогает за 3 недели",
    excerpt:
      "80% болей в спине — это не «что-то сломалось», а мышечный дисбаланс. Я объясняю, где именно зажимается тело у офисных работников и какие три позы исправляют это быстрее всего.",
    readTime: "5 мин",
  },
  {
    date: "28 мая 2026",
    tag: "Пилатес",
    title: "Пилатес vs йога: что выбрать, если вы не знаете с чего начать",
    excerpt:
      "Меня спрашивают об этом каждую неделю. Честный ответ: зависит от цели. Разбираю разницу на примерах реальных учеников — без маркетинга и продаж.",
    readTime: "7 мин",
  },
  {
    date: "15 мая 2026",
    tag: "Дыхание",
    title: "Техника 4-7-8: как я засыпаю за 2 минуты после напряжённого дня",
    excerpt:
      "Звучит как кликбейт, но это правда работает. Дыхательная практика, которую я использую сама и даю всем ученикам в конце тяжёлой недели. Объясняю физиологию.",
    readTime: "4 мин",
  },
]

export function Blog() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="blog" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Дневник тренера
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Личный блог
            </h2>
          </div>
          <p className={`text-muted-foreground max-w-xs leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Пишу о практике честно — без мотивационных цитат. Только опыт и конкретные техники.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-px bg-border">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`group bg-background hover:bg-card transition-all duration-500 p-8 lg:p-12 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                {/* Meta */}
                <div className="lg:col-span-3">
                  <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                  <span className="text-xs tracking-widest uppercase text-terracotta">{post.tag}</span>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-sage transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex lg:justify-end items-start pt-1">
                  <div className="text-muted-foreground group-hover:text-sage group-hover:translate-x-1 transition-all duration-300">
                    <Icon name="ArrowRight" size={20} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-6 lg:ml-[25%]">
                <Icon name="Clock" size={12} className="text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{post.readTime} чтения</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
