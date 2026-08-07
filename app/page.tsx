import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500 via-neutral-700 to-neutral-950" />

        {/* Light effects */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-2/3 w-1/2 bg-stone-400/10 blur-3xl" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* NAVIGATION */}
        <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-10">
          <a href="#home" className="flex items-center">
            <Image
              src="/grace-one-logo.png"
              alt="Grace One Developments"
              width={220}
              height={70}
              priority
              className="h-auto w-40 object-contain opacity-90 md:w-56"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.16em] text-neutral-300 md:flex">
            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#section8"
              className="transition hover:text-white"
            >
              Section 8
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* HERO CONTENT */}
        <div
          id="home"
          className="relative z-20 flex min-h-[calc(100vh-120px)] items-center justify-center px-6 pb-20 md:px-10"
        >
          <div className="max-w-5xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-neutral-300 md:text-sm">
              Grace One Developments
            </p>

            <h1 className="text-1xl font-light leading-tight text-neutral-100 md:text-3xl lg:text-8xl">
              Crafting Luxury Living Spaces
              <br />
              With Timeless Design
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-neutral-300 md:text-lg">
              We develop exceptional residential properties through innovative
              design, quality craftsmanship, and long-term investment
              strategies.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-neutral-500 px-8 py-4 text-sm uppercase tracking-[0.2em] text-neutral-300 transition hover:border-white hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-neutral-950 to-transparent" />
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-neutral-950 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Development With Purpose
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
              <h3 className="mb-4 text-xl font-light">
                Luxury Development
              </h3>

              <p className="leading-7 text-neutral-400">
                High-end residential properties designed with timeless
                architecture, modern finishes, and exceptional quality.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
              <h3 className="mb-4 text-xl font-light">
                Property Investment
              </h3>

              <p className="leading-7 text-neutral-400">
                Strategic property acquisitions focused on long-term value,
                rental potential, and sustainable growth.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
              <h3 className="mb-4 text-xl font-light">
                Custom Renovations
              </h3>

              <p className="leading-7 text-neutral-400">
                Transforming existing properties into attractive, efficient,
                and modern living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-neutral-900 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Our Work
          </p>

          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
            Grace One Developments is focused on acquiring, renovating, and
            improving residential properties that offer lasting value to
            residents and investors.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="min-h-80 rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-700 to-neutral-950 p-8">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Residential
                </p>

                <h3 className="mt-3 text-2xl font-light">
                  Modern Home Renovation
                </h3>
              </div>
            </div>

            <div className="min-h-80 rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-700 to-neutral-950 p-8">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Investment
                </p>

                <h3 className="mt-3 text-2xl font-light">
                  Rental Property Transformation
                </h3>
              </div>
            </div>

            <div className="min-h-80 rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-700 to-neutral-950 p-8">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Development
                </p>

                <h3 className="mt-3 text-2xl font-light">
                  Future Development Project
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section id="section8" className="bg-neutral-950 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Affordable Housing
          </p>

          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Section 8 Investment Solutions
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            Grace One Developments focuses on acquiring, renovating, and
            maintaining quality rental properties that may participate in the
            Housing Choice Voucher Program. Our goal is to provide attractive,
            safe housing while creating stable, long-term investment
            opportunities.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
              <span className="text-sm text-neutral-500">01</span>

              <h3 className="mb-4 mt-5 text-2xl font-light">
                Property Acquisition
              </h3>

              <p className="leading-7 text-neutral-400">
                Identifying properties in areas with strong rental demand,
                reasonable acquisition costs, and long-term value potential.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
              <span className="text-sm text-neutral-500">02</span>

              <h3 className="mb-4 mt-5 text-2xl font-light">
                Renovation and Compliance
              </h3>

              <p className="leading-7 text-neutral-400">
                Improving homes to create clean, safe, and modern living
                environments while preparing them for applicable inspections.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
              <span className="text-sm text-neutral-500">03</span>

              <h3 className="mb-4 mt-5 text-2xl font-light">
                Long-Term Management
              </h3>

              <p className="leading-7 text-neutral-400">
                Supporting consistent property maintenance, responsible tenant
                relations, and dependable rental operations.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="#contact"
              className="inline-flex border border-neutral-400 px-8 py-4 text-sm uppercase tracking-[0.2em] text-neutral-200 transition hover:bg-white hover:text-black"
            >
              Discuss Section 8 Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-neutral-900 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              About Us
            </p>

            <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
              Built on Vision, Quality, and Opportunity
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              Grace One Developments is a real estate development and
              investment company focused on creating attractive residential
              properties, improving communities, and building long-term value.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Our approach combines thoughtful property selection, practical
              renovation strategies, quality finishes, and responsible
              investment planning.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-neutral-950 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Let&apos;s Build Something Meaningful
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            Contact Grace One Developments to discuss property investments,
            renovation opportunities, partnerships, and future projects.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-10 inline-flex border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Grace One Developments. All rights
            reserved.
          </p>

          <a href="#home" className="transition hover:text-white">
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}