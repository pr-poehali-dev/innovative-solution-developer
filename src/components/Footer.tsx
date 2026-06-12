export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">А. Северова</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Личный тренер по йоге и пилатесу.<br />Мягко, осознанно, в вашем ритме.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">Обо мне</a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">Услуги</a>
              <a href="#schedule" className="text-sm text-foreground hover:text-sage transition-colors">Расписание</a>
              <a href="#blog" className="text-sm text-foreground hover:text-sage transition-colors">Блог</a>
              <a href="#booking" className="text-sm text-foreground hover:text-sage transition-colors">Запись</a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widests uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Instagram</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Telegram</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">YouTube</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Контакты</p>
            <nav className="flex flex-col gap-3">
              <a href="mailto:anna@severova.ru" className="text-sm text-foreground hover:text-sage transition-colors">anna@severova.ru</a>
              <p className="text-sm text-muted-foreground">Садовая ул., 12</p>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Анна Северова. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Дыши и Властвуй</p>
        </div>
      </div>
    </footer>
  )
}
