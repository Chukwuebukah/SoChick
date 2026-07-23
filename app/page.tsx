import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Bridal Hair Styling",
    description:
      "Elegant, timeless bridal looks designed to make every bride feel confident and radiant on her special day.",
  },
  {
    title: "Professional Wig Installation",
    description:
      "Seamless wig styling and installation for luxury wearers, photo-ready finishes, and all-day comfort.",
  },
  {
    title: "Special Occasion Styling",
    description:
      "Sophisticated hair services for events, parties, and celebrations with personalized glamour.",
  },
  {
    title: "Hair Consultations",
    description:
      "Tailored consultations to create a polished look that matches each client’s style, hair type, and life moment.",
  },
];

const courses = [
  {
    title: "Bridal Hairstyling Masterclass",
    description:
      "Hands-on training for professional updos, soft waves, veiling, and bridal finishing techniques.",
  },
  {
    title: "Professional Wig Installation Training",
    description:
      "In-depth education on wig fitting, blending, and styling for confident luxury service delivery.",
  },
];

const faqs = [
  {
    question: "Do you offer on-site bridal styling?",
    answer:
      "Yes, we provide on-location styling for bridal parties and special events within our service area.",
  },
  {
    question: "Can I book a wig consultation first?",
    answer:
      "Absolutely. We recommend a one-on-one consultation to ensure the perfect fit, style, and comfort.",
  },
  {
    question: "How long are training programs?",
    answer:
      "Our academy courses are designed as immersive day sessions with practical lessons and portfolio guidance.",
  },
];

const page = () => {
  return (
    <main className="min-h-screen text-foreground bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 relative">
        <header className="sticky top-4 z-20 mx-auto max-w-7xl bg-foreground/95 backdrop-blur-md rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-6 py-3 lg:px-8">
            <a href="#" className="flex items-center">
              <Image src="/logo.png" alt="SoChicks Logo" width={100} height={100} className="w-auto h-16" priority />
            </a>
            <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.24em] text-background/80 md:flex">
              <a href="#about" className="transition hover:text-white font-semibold">About</a>
              <a href="#services" className="transition hover:text-white font-semibold">Services</a>
              <a href="#portfolio" className="transition hover:text-white font-semibold">Portfolio</a>
              <a href="#academy" className="transition hover:text-white font-semibold">Academy</a>
              <a href="#faq" className="transition hover:text-white font-semibold">FAQ</a>
              <a href="#book" className="transition hover:text-white font-semibold">Contact</a>
            </nav>
          </div>
        </header>

        <section className="mt-8 relative overflow-hidden rounded-4xl border border-border bg-white px-6 py-12 shadow-[0_30px_80px_rgba(44,27,18,0.08)] lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">Own Your Hertitude</span>
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                Hair is your attitude. Sochick crafts it with confidence.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted">
                We create looks and training experiences designed to help women own their power, present boldly, and leave a lasting impression.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#book" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-accent-soft">
                  Book a consultation
                </a>
                <a href="#academy" className="inline-flex items-center justify-center rounded-full border border-accent bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition hover:bg-accent/10">
                  Explore academy
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-4xl bg-white shadow-lg">
              <img
                src="https://i.pinimg.com/736x/da/c0/f5/dac0f576dd5ba38d8f23b6abf18e52cf.jpg"
                alt="Bridal hairstyling and wig installation"
                className="h-105 w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/90 via-transparent to-transparent p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-background">Sochick styling experience</p>
                <p className="mt-2 max-w-sm text-lg font-medium">Luxury hair artistry for your most memorable moments.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-8 rounded-4xl border border-border bg-white/90 px-8 py-10 shadow-sm backdrop-blur-sm">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">About Sochick</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Elegant beauty, expert technique, unforgettable results.</h2>
              <p className="text-base leading-8 text-muted">
                At Sochick, every hairstyle is crafted to complement the individuality of the woman wearing it, while our academy cultivates the confidence and expertise of future beauty professionals.
              </p>
              <p className="text-base leading-8 text-muted">
                “Own Your Hertitude” is our rallying cry: hair is a visual declaration of identity and personal power. We design that energy from the roots up, creating bridal elegance, polished wig installations, and training that makes every stylist feel unstoppable.
              </p>
              <p className="text-base leading-8 text-muted">
                A poorly installed lace frontal can chip away at confidence. Sochick is the solution—it does not just style hair; it creates the mental armor a woman wears into the world.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background/50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Personalized</p>
                <p className="mt-3 text-lg font-semibold text-foreground">Tailored service for every client</p>
              </div>
              <div className="rounded-3xl border border-border bg-background/50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Trusted</p>
                <p className="mt-3 text-lg font-semibold text-foreground">Premium styling with attention to detail</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-border bg-white/80 p-8 text-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">What we specialize in</p>
            <h3 className="mt-5 text-2xl font-semibold">Services built around confidence, beauty, and elegance.</h3>
            <p className="mt-4 leading-7 text-muted">
              From bridal hair installation and luxury wig styling to professional training, every Sochick service is built to help women own their confidence and elevate their presence.
            </p>
            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li key={service.title} className="rounded-3xl border border-border bg-background/50 p-5">
                  <p className="text-base font-semibold text-foreground">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Signature styling that helps you own your Hertitude</h2>
            </div>
            <a href="#portfolio" className="inline-flex items-center rounded-full border border-border bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-white/50">
              View portfolio
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-4xl border border-border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="https://i.pinimg.com/736x/4e/24/99/4e2499d8818538bc993777502a72f17b.jpg"
                alt="Bridal hairstyling"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Bridal styling</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Elegant bridal looks designed to make every bride feel radiant, polished, and confident.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl border border-border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="https://i.pinimg.com/736x/e7/af/03/e7af03774007aa3f4f6e0a465a8158aa.jpg"
                alt="Wig installation service"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Wig installation</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Precision installation and styling for flawless, confidence-boosting wigs.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl border border-border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="https://i.pinimg.com/1200x/80/ab/19/80ab193e3f2daf8de5c452ccabb4f1ae.jpg"
                alt="Beauty training session"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Training academy</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Hands-on training for aspiring stylists who want to own their craft and build professional confidence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="academy" className="mt-24 rounded-4xl border border-border bg-white/80 px-8 py-12 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Training Academy</p>
              <h2 className="text-3xl font-semibold text-foreground">Hands-on education for future beauty professionals.</h2>
              <p className="max-w-xl leading-8 text-muted">
                Our academy teaches bridal hairstyling and wig installation with practical, workshop-style lessons so aspiring stylists feel prepared to succeed in the beauty industry.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {courses.map((course) => (
                <div key={course.title} className="rounded-[1.75rem] border border-border bg-background p-6">
                  <p className="text-lg font-semibold text-foreground">{course.title}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-24 rounded-4xl border border-border bg-white/95 px-8 py-12 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Testimonials</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Loved by clients and students alike.</h2>
            </div>
            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-border bg-background p-6">
                <p className="text-base leading-8 text-foreground">
                  “Sochick made our wedding day styling feel effortless. The hair looked polished and lasted all night—exactly what I wanted.”
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">— Sarah, bride</p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-background p-6">
                <p className="text-base leading-8 text-foreground">
                  “The training course was practical, supportive, and inspiring. I left with the confidence to serve clients right away.”
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">— Maya, stylist student</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-4xl border border-border bg-white/80 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Frequently asked questions</p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-border bg-background p-6">
                  <p className="font-semibold text-foreground">{faq.question}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="book" className="rounded-4xl border border-border bg-white/80 p-10 text-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Contact & booking</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">Ready to book your appointment or reserve academy space?</h2>
            <p className="mt-4 leading-7 text-muted">
              Reach out for consultations, wedding day styling, wig installation, or training program enrollment. We’re here to help you bring your beauty vision to life.
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">Location</p>
                <p className="mt-2 text-base text-foreground">Osapa London, Lekki, Lagos</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">Phone</p>
                <p className="mt-2 text-base text-foreground">+234 812 345 6789</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">Email</p>
                <p className="mt-2 text-base text-foreground">hello@sochickbeauty.com</p>
              </div>
            </div>

            <a href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#1ebd57]">
              <FaWhatsapp className="text-xl" />
              Contact on WhatsApp
            </a>
          </div>
        </section>

        <footer className="mt-24 border-t border-border pt-8 text-sm text-muted">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Sochick. Elegant hairstyling and beauty education.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition hover:text-accent font-semibold">Instagram</a>
              <a href="#" className="transition hover:text-accent font-semibold">TikTok</a>
              <a href="https://wa.me/2348123456789" className="transition hover:text-[#25D366] font-semibold flex items-center gap-1">
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110">
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  );
};

export default page;
