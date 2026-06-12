import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Services } from "@/components/Services"
import { Schedule } from "@/components/Schedule"
import { Process } from "@/components/Process"
import { Blog } from "@/components/Blog"
import { Testimonial } from "@/components/Testimonial"
import { Booking } from "@/components/Booking"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Schedule />
      <Process />
      <Blog />
      <Testimonial />
      <Booking />
      <Footer />
    </main>
  )
}
