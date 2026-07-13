import React from "react";

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
    <main className="min-h-screen text-[#2c2520]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <header className="sticky top-0 z-20 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#" className="text-xl font-semibold tracking-[0.25em] text-[#3f3329]">Sochick</a>
            <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.24em] text-[#6f5f53] md:flex">
              <a href="#about" className="transition hover:text-[#3f3329]">About</a>
              <a href="#services" className="transition hover:text-[#3f3329]">Services</a>
              <a href="#portfolio" className="transition hover:text-[#3f3329]">Portfolio</a>
              <a href="#academy" className="transition hover:text-[#3f3329]">Academy</a>
              <a href="#faq" className="transition hover:text-[#3f3329]">FAQ</a>
              <a href="#book" className="transition hover:text-[#3f3329]">Contact</a>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-4xl border border-[#c9b2a5] bg-[#f4f1ec] px-6 py-12 shadow-[0_30px_80px_rgba(55,28,19,0.08)] lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex rounded-full bg-[#e7ddd3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#5a4a3f]">Own Your Hertitude</span>
              <h1 className="text-5xl font-semibold tracking-tight text-[#2d231c] sm:text-6xl">
                Hair is your attitude. Sochick crafts it with confidence.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[#5e5046]">
                We create looks and training experiences designed to help women own their power, present boldly, and leave a lasting impression.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#book" className="inline-flex items-center justify-center rounded-full bg-[#6e5f52] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#5a4d42]">
                  Book a consultation
                </a>
                <a href="#academy" className="inline-flex items-center justify-center rounded-full border border-[#6e5f52] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#6e5f52] transition hover:bg-[#f1ece6]">
                  Explore academy
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-4xl bg-[#fcfaf7] shadow-lg">
              <img
                src="https://i.pinimg.com/736x/da/c0/f5/dac0f576dd5ba38d8f23b6abf18e52cf.jpg"
                alt="Bridal hairstyling and wig installation"
                className="h-105 w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#2c2520]/85 via-transparent to-transparent p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-[#f7ede4]">Sochick styling experience</p>
                <p className="mt-2 max-w-sm text-lg font-medium">Luxury hair artistry for your most memorable moments.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-8 rounded-4xl border border-[#d1bfb0] bg-white/90 px-8 py-10 shadow-sm backdrop-blur-sm">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8c7a6d]">About Sochick</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1f1712]">Elegant beauty, expert technique, unforgettable results.</h2>
              <p className="text-base leading-8 text-[#65564d]">
                At Sochick, every hairstyle is crafted to complement the individuality of the woman wearing it, while our academy cultivates the confidence and expertise of future beauty professionals.
              </p>
              <p className="text-base leading-8 text-[#65564d]">
                “Own Your Hertitude” is our rallying cry: hair is a visual declaration of identity and personal power. We design that energy from the roots up, creating bridal elegance, polished wig installations, and training that makes every stylist feel unstoppable.
              </p>
              <p className="text-base leading-8 text-[#65564d]">
                A poorly installed lace frontal can chip away at confidence. Sochick is the solution—it does not just style hair; it creates the mental armor a woman wears into the world.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#e6d8cf] bg-[#f4efe8] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#907b72]">Personalized</p>
                <p className="mt-3 text-lg font-semibold text-[#2c2019]">Tailored service for every client</p>
              </div>
              <div className="rounded-3xl border border-[#e6d8cf] bg-[#f4efe8] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#907b72]">Trusted</p>
                <p className="mt-3 text-lg font-semibold text-[#2c2019]">Premium styling with attention to detail</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-[#d1bfb0] bg-[#f6f1eb] p-8 text-[#52453d]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7f6f65]">What we specialize in</p>
            <h3 className="mt-5 text-2xl font-semibold">Services built around confidence, beauty, and elegance.</h3>
            <p className="mt-4 leading-7 text-[#5f4f45]">
              From bridal hair installation and luxury wig styling to professional training, every Sochick service is built to help women own their confidence and elevate their presence.
            </p>
            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li key={service.title} className="rounded-3xl border border-[#ddd1c6] bg-white p-5">
                  <p className="text-base font-semibold text-[#2b2018]">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6a5b51]">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#877563]">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#241b16]">Signature styling that helps you own your Hertitude</h2>
            </div>
            <a href="#portfolio" className="inline-flex items-center rounded-full border border-[#b2a08f] bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#3d3027] transition hover:bg-[#f7f2ec]">
              View portfolio
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-4xl border border-[#e6d1c6] bg-white shadow-sm">
              <img
                src="https://i.pinimg.com/736x/4e/24/99/4e2499d8818538bc993777502a72f17b.jpg"
                alt="Bridal hairstyling"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2b1f18]">Bridal styling</h3>
                <p className="mt-3 text-sm leading-6 text-[#695945]">Elegant bridal looks designed to make every bride feel radiant, polished, and confident.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl border border-[#e6d1c6] bg-white shadow-sm">
              <img
                src="https://i.pinimg.com/736x/e7/af/03/e7af03774007aa3f4f6e0a465a8158aa.jpg"
                alt="Wig installation service"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2b1f18]">Wig installation</h3>
                <p className="mt-3 text-sm leading-6 text-[#695945]">Precision installation and styling for flawless, confidence-boosting wigs.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl border border-[#e6d1c6] bg-white shadow-sm">
              <img
                src="https://i.pinimg.com/1200x/80/ab/19/80ab193e3f2daf8de5c452ccabb4f1ae.jpg"
                alt="Beauty training session"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2b1f18]">Training academy</h3>
                <p className="mt-3 text-sm leading-6 text-[#695945]">Hands-on training for aspiring stylists who want to own their craft and build professional confidence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="academy" className="mt-24 rounded-4xl border border-[#e4d5ca] bg-[#fcfaf7] px-8 py-12 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#877563]">Training Academy</p>
              <h2 className="text-3xl font-semibold text-[#271d16]">Hands-on education for future beauty professionals.</h2>
              <p className="max-w-xl leading-8 text-[#5e4f46]">
                Our academy teaches bridal hairstyling and wig installation with practical, workshop-style lessons so aspiring stylists feel prepared to succeed in the beauty industry.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {courses.map((course) => (
                <div key={course.title} className="rounded-[1.75rem] border border-[#d8c2b5] bg-[#f6f0ea] p-6">
                  <p className="text-lg font-semibold text-[#2e231d]">{course.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#6b5b51]">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-24 rounded-4xl border border-[#e2d1c5] bg-white/95 px-8 py-12 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#877563]">Testimonials</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#241b16]">Loved by clients and students alike.</h2>
            </div>
            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-[#e5d5cc] bg-[#f4efe8] p-6">
                <p className="text-base leading-8 text-[#54453d]">
                  “Sochick made our wedding day styling feel effortless. The hair looked polished and lasted all night—exactly what I wanted.”
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c6c61]">— Sarah, bride</p>
              </div>
              <div className="rounded-[1.75rem] border border-[#e5d5cc] bg-[#f4efe8] p-6">
                <p className="text-base leading-8 text-[#54453d]">
                  “The training course was practical, supportive, and inspiring. I left with the confidence to serve clients right away.”
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c6c61]">— Maya, stylist student</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-4xl border border-[#e3d6cb] bg-[#f6f1eb] p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-[#a58a7d]">Frequently asked questions</p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-[#e4d7cf] bg-white p-6">
                  <p className="font-semibold text-[#2d221b]">{faq.question}</p>
                  <p className="mt-2 text-sm leading-7 text-[#6b5d52]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="book" className="rounded-4xl border border-[#d9c8bc] bg-[#fcfaf7] p-10 text-[#4a3b33]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#a58a7d]">Contact & booking</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#231a15]">Ready to book your appointment or reserve academy space?</h2>
            <p className="mt-4 leading-7 text-[#5d4c42]">
              Reach out for consultations, wedding day styling, wig installation, or training program enrollment. We’re here to help you bring your beauty vision to life.
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b7a6f]">Location</p>
                <p className="mt-2 text-base text-[#4a3b33]">Osapa London, Lekki, Lagos</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b7a6f]">Phone</p>
                <p className="mt-2 text-base text-[#4a3b33]">+234 812 345 6789</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b7a6f]">Email</p>
                <p className="mt-2 text-base text-[#4a3b33]">hello@sochickbeauty.com</p>
              </div>
            </div>
            <a href="mailto:hello@sochickbeauty.com" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#8c6d58] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#7e5b45]">
              Send a message
            </a>
          </div>
        </section>

        <footer className="mt-24 border-t border-[#ded2c7] pt-8 text-sm text-[#6d5c54]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Sochick. Elegant hairstyling and beauty education.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition hover:text-[#241b16]">Instagram</a>
              <a href="#" className="transition hover:text-[#241b16]">TikTok</a>
              <a href="#" className="transition hover:text-[#241b16]">WhatsApp</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default page;
