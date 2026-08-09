"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const lightField =
  "w-full border border-neutral-300 bg-neutral-50 px-4 py-4 text-neutral-950 outline-none transition duration-300 placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white";

const darkField =
  "w-full border border-neutral-700 bg-neutral-950 px-4 py-4 text-white outline-none transition duration-300 placeholder:text-neutral-500 focus:border-neutral-400";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 md:px-7 ${
            scrolled
              ? "border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#home"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <Image
              src="/grace-one-logo.png"
              alt="Grace One Developments"
              width={200}
              height={100}
              priority
              className="h-auto w-[135px] object-contain md:w-[155px]"
            />
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-neutral-200 lg:flex xl:gap-5 xl:text-[11px]">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#section8" className="transition hover:text-white">
              Section 8
            </a>

            <a href="#remodeling" className="transition hover:text-white">
              Remodeling
            </a>

            <a href="#opportunities" className="transition hover:text-white">
              Opportunities
            </a>

            <a
              href="#contact"
              className="border border-white/40 px-4 py-2.5 text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Contact
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-black/30 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-white transition ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-6 text-sm uppercase tracking-[0.18em] text-neutral-200">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Section 8", "#section8"],
              ["Remodeling", "#remodeling"],
              ["Opportunities", "#opportunities"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <Image
          src="/images/hero-home.jpg"
          alt="Residential real estate development"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-52 md:px-10 md:pt-48">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-neutral-300">
              Real Estate • Development • Investment
            </p>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.035em] text-white md:text-6xl lg:text-7xl xl:text-8xl">
              Building Communities.
              <br />
              Creating Lasting Value.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-200 md:text-lg">
              Grace One Developments creates quality residential properties
              through thoughtful development, renovation, rental housing, and
              long-term investment.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-w-52 items-center justify-center bg-white px-8 py-4 text-sm uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-1 hover:bg-neutral-200"
              >
                <span style={{ color: "#0a0a0a" }}>Explore Projects</span>
              </a>

              <a
                href="#section8"
                className="inline-flex min-w-60 items-center justify-center border border-white/50 bg-black/20 px-8 py-4 text-sm uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Housing Opportunities
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/60"
        >
          Scroll ↓
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-neutral-100 px-6 py-24 text-neutral-950 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="group relative min-h-[480px] overflow-hidden rounded-3xl md:min-h-[600px]">
            <Image
              src="/images/about-home.jpg"
              alt="Residential real estate"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="lg:pl-10">
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
              About Grace One
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[1.08] tracking-[-0.03em] md:text-6xl">
              Developing Properties.
              <br />
              Creating Opportunities.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Grace One Developments is a residential real estate development
              and investment company focused on identifying opportunities,
              improving properties, and creating quality places to live.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Our approach combines property acquisition, renovation, rental
              housing, redevelopment, and strategic investment with a long-term
              vision for responsible growth.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-neutral-300 pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Focus
                </p>
                <p className="mt-4 text-2xl font-light">
                  Residential Real Estate
                </p>
              </div>

              <div className="border-t border-neutral-300 pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Vision
                </p>
                <p className="mt-4 text-2xl font-light">Long-Term Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-neutral-950 px-6 py-24 md:px-10 md:py-32">
        <div className="reveal mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-light tracking-[-0.03em] md:text-6xl">
            Real Estate With Purpose
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-neutral-400">
            From acquisition to renovation and long-term ownership, Grace One
            approaches real estate with a focus on quality, opportunity, and
            sustainable value.
          </p>

          <div className="mt-16 grid overflow-hidden rounded-3xl border border-neutral-800 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Residential Development",
                text: "Residential properties designed and improved for modern living and long-term value.",
              },
              {
                number: "02",
                title: "Rental Housing",
                text: "Quality rental properties supported by responsible ownership and thoughtful property management.",
              },
              {
                number: "03",
                title: "Remodeling",
                text: "Renovation and property improvement for homeowners and investment properties.",
              },
              {
                number: "04",
                title: "Investment Opportunities",
                text: "Evaluating residential acquisitions, redevelopment opportunities, and strategic partnerships.",
              },
            ].map((service) => (
              <div
                key={service.number}
                className="min-h-72 border-b border-neutral-800 p-8 transition duration-300 hover:bg-neutral-900 md:border-r md:p-12"
              >
                <span className="text-sm text-neutral-600">
                  {service.number}
                </span>

                <h3 className="mt-14 text-2xl font-light md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-md text-base leading-8 text-neutral-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-neutral-900 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
                Portfolio
              </p>

              <h2 className="mt-4 text-5xl font-light leading-none tracking-[-0.03em] md:text-6xl">
                Featured
                <br />
                Projects
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-neutral-400">
              Follow Grace One projects from acquisition and planning through
              renovation, completion, and long-term ownership.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                src: "/images/project-1.jpg",
                status: "Coming Soon",
                category: "Residential",
                title: "Modern Home Transformation",
                details: "Acquisition • Renovation • Resale",
              },
              {
                src: "/images/project-2.jpg",
                status: "Planned",
                category: "Rental Housing",
                title: "Rental Property Portfolio",
                details: "Renovation • Leasing • Ownership",
              },
              {
                src: "/images/project-3.jpg",
                status: "Future",
                category: "Development",
                title: "Future Grace One Development",
                details: "Planning • Development • Investment",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group relative min-h-[560px] overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />

                <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.2em] backdrop-blur-md">
                  {project.status}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-light leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-neutral-300">{project.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section
        id="section8"
        className="bg-neutral-100 px-6 py-24 text-neutral-950 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
              Housing Opportunities
            </p>

            <h2 className="mt-5 text-5xl font-light tracking-[-0.03em] md:text-7xl">
              Section 8 Housing
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Grace One Developments plans to offer quality rental homes that
              may participate in the Housing Choice Voucher Program.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Prospective residents can submit their information to express
              interest in future Grace One rental properties.
            </p>

            <a
              href="#housing-application"
              className="mt-10 inline-flex items-center justify-center bg-neutral-950 px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Apply for Housing
            </a>
          </div>

          <div className="group relative min-h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/images/section8.jpg"
              alt="Residential neighborhood"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* HOUSING FORM */}
      <section
        id="housing-application"
        className="bg-white px-6 py-24 text-neutral-950 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            Prospective Residents
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] md:text-6xl">
            Housing Interest Application
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Tell us what type of housing you are looking for. Grace One can
            contact you when an appropriate property becomes available.
          </p>

          <form className="mt-14 space-y-7">
            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className={lightField}
                />
              </div>

              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className={lightField}
                />
              </div>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className={lightField}
                />
              </div>

              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className={lightField}
                />
              </div>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Household Size
                </label>
                <select className={lightField} defaultValue="">
                  <option value="" disabled>
                    Select household size
                  </option>
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5+ people</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Voucher Status
                </label>
                <select className={lightField} defaultValue="">
                  <option value="" disabled>
                    Select voucher status
                  </option>
                  <option>I currently have a voucher</option>
                  <option>I am waiting for a voucher</option>
                  <option>I do not currently have a voucher</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Voucher Bedroom Size
                </label>
                <select className={lightField} defaultValue="">
                  <option value="" disabled>
                    Select if applicable
                  </option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm text-neutral-600">
                  Desired Move-In Date
                </label>
                <input type="date" className={lightField} />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm text-neutral-600">
                Housing Authority / County
              </label>
              <input
                type="text"
                placeholder="Example: Tampa Housing Authority"
                className={lightField}
              />
            </div>

            <div>
              <label className="mb-3 block text-sm text-neutral-600">
                Additional Information
              </label>
              <textarea
                rows={5}
                placeholder="Tell us what type of housing you are looking for..."
                className={`${lightField} resize-none`}
              />
            </div>

            <button
              type="button"
              className="bg-neutral-950 px-9 py-4 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-neutral-800"
            >
              Submit Housing Interest
            </button>
          </form>

          <p className="mt-7 max-w-3xl text-xs leading-6 text-neutral-500">
            Submission of this interest form does not guarantee housing,
            eligibility, approval, or property availability.
          </p>
        </div>
      </section>

      {/* REMODELING */}
      <section
        id="remodeling"
        className="bg-neutral-950 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="group relative min-h-[520px] overflow-hidden rounded-3xl">
            <Image
              src="/images/remodeling.jpg"
              alt="Residential remodeling"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
              Remodeling
            </p>

            <h2 className="mt-5 text-5xl font-light tracking-[-0.03em] md:text-6xl">
              Transform Your Property
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
              Grace One Developments provides renovation and property
              improvement services for homeowners and investment properties.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Interior Renovations",
                "Investment Property Renovations",
                "Residential Improvements",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-neutral-800 pb-6 text-xl font-light"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex border border-white px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="bg-neutral-900 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            Real Estate Opportunities
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-light leading-tight tracking-[-0.03em] md:text-7xl">
            Have a Property With Potential?
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Grace One Developments evaluates residential properties for
            acquisition, renovation, redevelopment, and strategic partnership
            opportunities.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Property Owners",
                title: "Sell a Property",
                text: "Submit a residential property for acquisition consideration.",
              },
              {
                label: "Agents & Wholesalers",
                title: "Bring Us a Deal",
                text: "Share residential opportunities that may align with Grace One's acquisition strategy.",
              },
              {
                label: "Partnerships",
                title: "Partner With Grace One",
                text: "Connect with us about future real estate investment and development partnerships.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-neutral-600"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {item.label}
                </p>

                <h3 className="mt-5 text-2xl font-light">{item.title}</h3>

                <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
              </div>
            ))}
          </div>

          {/* PROPERTY SUBMISSION */}
          <div className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
                  Submit a Property
                </p>

                <h3 className="mt-5 text-4xl font-light tracking-[-0.03em] md:text-5xl">
                  Tell Us About the Opportunity
                </h3>

                <p className="mt-6 max-w-md text-lg leading-8 text-neutral-400">
                  Share basic information about the property. Grace One can
                  review the opportunity and contact you if it fits our
                  acquisition or redevelopment criteria.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className={darkField}
                  />

                  <input
                    type="tel"
                    placeholder="Phone number"
                    className={darkField}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email address"
                  className={darkField}
                />

                <input
                  type="text"
                  placeholder="Property address"
                  className={darkField}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <select className={darkField} defaultValue="">
                    <option value="" disabled>
                      Property type
                    </option>
                    <option>Single Family</option>
                    <option>Townhome</option>
                    <option>Condo</option>
                    <option>Multifamily</option>
                    <option>Land</option>
                    <option>Other</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Asking price"
                    className={darkField}
                  />
                </div>

                <select className={darkField} defaultValue="">
                  <option value="" disabled>
                    Property condition
                  </option>
                  <option>Move-in ready</option>
                  <option>Needs light repairs</option>
                  <option>Needs major renovation</option>
                  <option>Vacant / distressed</option>
                  <option>Other</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Tell us about the property, condition, repairs needed, timeline, or opportunity..."
                  className={`${darkField} resize-none`}
                />

                <button
                  type="button"
                  className="bg-white px-9 py-4 text-sm uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-neutral-200"
                >
                  Submit Property
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-neutral-100 px-6 py-28 text-neutral-950 md:px-10 md:py-36"
      >
        <div className="reveal mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">
            Contact Grace One
          </p>

          <h2 className="mt-6 text-5xl font-light leading-[1.05] tracking-[-0.03em] md:text-7xl">
            Let&apos;s Build Something
            <br />
            Meaningful.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Contact Grace One Developments about housing, remodeling,
            acquisitions, development opportunities, or future partnerships.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:your@email.com"
              className="inline-flex min-w-56 items-center justify-center bg-neutral-950 px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Contact Grace One
            </a>

            <a
              href="#housing-application"
              className="inline-flex min-w-64 items-center justify-center border border-neutral-400 px-8 py-4 text-sm uppercase tracking-[0.18em] text-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-neutral-950"
            >
              Housing Application
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-neutral-300">Grace One Developments</p>
            <p className="mt-1">Real Estate • Development • Investment</p>
          </div>

          <p>
            © {new Date().getFullYear()} Grace One Developments. All rights
            reserved.
          </p>

          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 800ms ease,
            transform 800ms ease;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .reveal,
          .reveal-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}