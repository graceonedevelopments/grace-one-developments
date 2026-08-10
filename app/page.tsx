"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const lightField =
  "w-full border border-neutral-300 bg-neutral-50 px-4 py-4 text-neutral-950 outline-none transition duration-300 placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white";

const darkField =
  "w-full border border-neutral-700 bg-neutral-950 px-4 py-4 text-white outline-none transition duration-300 placeholder:text-neutral-500 focus:border-neutral-400";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [housingStatus, setHousingStatus] =
    useState<FormStatus>("idle");
  const [propertyStatus, setPropertyStatus] =
    useState<FormStatus>("idle");
  const [contactStatus, setContactStatus] =
    useState<FormStatus>("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function submitForm(
    event: FormEvent<HTMLFormElement>,
    endpoint: string,
    setStatus: (status: FormStatus) => void
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      setStatus("sending");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Form submission error:", result);
        throw new Error(
          result?.error || "We could not submit your information."
        );
      }

      form.reset();
      setStatus("success");

      window.setTimeout(() => {
        setStatus("idle");
      }, 8000);
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");

      window.setTimeout(() => {
        setStatus("idle");
      }, 8000);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 md:px-7 ${
            scrolled
              ? "border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#home" className="flex shrink-0 items-center">
            <Image
              src="/grace-one-logo.png"
              alt="Grace One Developments"
              width={180}
              height={110}
              priority
              className="h-auto w-[120px] object-contain md:w-[135px]"
            />
          </a>

          <nav className="hidden items-center gap-5 text-[11px] uppercase tracking-[0.16em] text-neutral-200 lg:flex">
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

            <a
              href="#opportunities"
              className="transition hover:text-white"
            >
              Opportunities
            </a>

            <a
              href="#contact"
              className="border border-white/40 px-5 py-3 text-white transition hover:bg-white hover:text-black"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-black/40 lg:hidden"
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/95 p-6 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col text-sm uppercase tracking-[0.18em] text-neutral-200">
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
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <Image
          src="/images/hero-home.jpg"
          alt="Residential development"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-44 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-neutral-300">
              Real Estate • Development • Investment
            </p>

            <h1 className="text-5xl font-light leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-7xl xl:text-8xl">
              Building Communities.
              <br />
              Creating Lasting Value.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-200">
              Grace One Developments creates quality residential
              properties through thoughtful development, renovation,
              rental housing, and long-term investment.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm uppercase tracking-[0.18em] transition hover:-translate-y-1"
              >
                <span style={{ color: "#0a0a0a" }}>
                  Explore Projects
                </span>
              </a>

              <a
                href="#section8"
                className="inline-flex items-center justify-center border border-white/50 bg-black/20 px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Housing Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-neutral-100 px-6 py-28 text-neutral-950 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-3xl">
            <Image
              src="/images/about-home.jpg"
              alt="Residential development"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              About Grace One
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
              Developing Properties.
              <br />
              Creating Opportunities.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Grace One Developments is a residential real estate
              development and investment company focused on identifying
              opportunities, improving properties, and creating quality
              places to live.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Our approach combines acquisition, renovation, rental
              housing, redevelopment, and strategic investment with a
              long-term vision for responsible growth.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-neutral-950 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Real Estate With Purpose
          </h2>

          <div className="mt-16 grid overflow-hidden rounded-3xl border border-neutral-800 md:grid-cols-2">
            {[
              [
                "01",
                "Residential Development",
                "Residential properties designed and improved for modern living and long-term value.",
              ],
              [
                "02",
                "Rental Housing",
                "Quality rental properties supported by responsible ownership and thoughtful management.",
              ],
              [
                "03",
                "Remodeling",
                "Renovation and property improvement for homeowners and investment properties.",
              ],
              [
                "04",
                "Investment Opportunities",
                "Residential acquisitions, redevelopment opportunities, and strategic partnerships.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="min-h-72 border-b border-neutral-800 p-10 md:border-r"
              >
                <span className="text-sm text-neutral-600">
                  {number}
                </span>

                <h3 className="mt-12 text-3xl font-light">{title}</h3>

                <p className="mt-5 max-w-md leading-8 text-neutral-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-neutral-900 px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-light md:text-6xl">
            Featured Projects
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                src: "/images/project-1.jpg",
                status: "Coming Soon",
                title: "Modern Home Transformation",
              },
              {
                src: "/images/project-2.jpg",
                status: "Planned",
                title: "Rental Property Portfolio",
              },
              {
                src: "/images/project-3.jpg",
                status: "Future",
                title: "Future Grace One Development",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group relative min-h-[560px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.2em]">
                  {project.status}
                </div>

                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-light">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section
        id="section8"
        className="bg-neutral-100 px-6 py-28 text-neutral-950 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Housing Opportunities
            </p>

            <h2 className="mt-5 text-5xl font-light md:text-7xl">
              Section 8 Housing
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Grace One Developments plans to offer quality rental homes
              that may participate in the Housing Choice Voucher Program.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Prospective residents can submit their information to
              express interest in future Grace One rental properties.
            </p>

            <a
              href="#housing-application"
              className="mt-10 inline-flex bg-neutral-950 px-8 py-4 text-sm uppercase tracking-[0.18em]"
              style={{ color: "#ffffff" }}
            >
              Apply for Housing →
            </a>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-3xl">
            <Image
              src="/images/section8.jpg"
              alt="Residential neighborhood"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOUSING APPLICATION */}
      <section
        id="housing-application"
        className="bg-white px-6 py-28 text-neutral-950 md:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Prospective Residents
          </p>

          <h2 className="mt-5 text-4xl font-light md:text-6xl">
            Housing Interest Application
          </h2>

          <form
            onSubmit={(event) =>
              submitForm(event, "/api/housing", setHousingStatus)
            }
            className="mt-14 space-y-7"
          >
            <div className="grid gap-7 md:grid-cols-2">
              <input
                name="firstName"
                required
                placeholder="First Name"
                className={lightField}
              />

              <input
                name="lastName"
                required
                placeholder="Last Name"
                className={lightField}
              />
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className={lightField}
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone"
                className={lightField}
              />
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <select
                name="householdSize"
                required
                defaultValue=""
                className={lightField}
              >
                <option value="" disabled>
                  Household Size
                </option>
                <option>1 person</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5+ people</option>
              </select>

              <select
                name="voucherStatus"
                required
                defaultValue=""
                className={lightField}
              >
                <option value="" disabled>
                  Voucher Status
                </option>
                <option>Current voucher</option>
                <option>Waiting for voucher</option>
                <option>No voucher</option>
                <option>Not sure</option>
              </select>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <select
                name="bedrooms"
                defaultValue=""
                className={lightField}
              >
                <option value="">Voucher Bedroom Size</option>
                <option>Studio</option>
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>3 Bedrooms</option>
                <option>4+ Bedrooms</option>
              </select>

              <input
                name="moveInDate"
                type="date"
                className={lightField}
              />
            </div>

            <input
              name="housingAuthority"
              placeholder="Housing Authority / County"
              className={lightField}
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what type of housing you are looking for..."
              className={`${lightField} resize-none`}
            />

            <button
              type="submit"
              disabled={housingStatus === "sending"}
              className="bg-neutral-950 px-9 py-4 text-sm uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-60"
              style={{ color: "#ffffff" }}
            >
              {housingStatus === "sending"
                ? "Sending..."
                : "Submit Housing Interest"}
            </button>

            {housingStatus === "success" && (
              <div
                className="mt-6 border border-green-700 bg-green-50 p-5"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold text-green-800">
                  Thank you! Your housing interest has been received.
                </p>

                <p className="mt-2 text-sm text-green-700">
                  Grace One Developments has received your information.
                  Our team will review your submission and contact you
                  if additional information is needed.
                </p>
              </div>
            )}

            {housingStatus === "error" && (
              <div
                className="mt-6 border border-red-700 bg-red-50 p-5"
                role="alert"
              >
                <p className="font-semibold text-red-800">
                  We couldn&apos;t submit your application.
                </p>

                <p className="mt-2 text-sm text-red-700">
                  Please check your information and try again. If the
                  problem continues, contact Grace One Developments
                  directly.
                </p>
              </div>
            )}
          </form>

          <p className="mt-7 text-xs leading-6 text-neutral-500">
            Submission does not guarantee housing availability,
            eligibility, or approval.
          </p>
        </div>
      </section>

      {/* REMODELING */}
      <section
        id="remodeling"
        className="bg-neutral-950 px-6 py-28 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl">
            <Image
              src="/images/remodeling.jpg"
              alt="Residential remodeling"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Remodeling
            </p>

            <h2 className="mt-5 text-5xl font-light md:text-6xl">
              Transform Your Property
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-400">
              Grace One Developments provides renovation and property
              improvement services for homeowners and investment
              properties.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex border border-white px-8 py-4 text-sm uppercase tracking-[0.18em] text-white"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="bg-neutral-900 px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Real Estate Opportunities
          </p>

          <h2 className="mt-5 text-5xl font-light md:text-7xl">
            Have a Property With Potential?
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Grace One evaluates residential properties for acquisition,
            renovation, redevelopment, and partnership opportunities.
          </p>

          <div className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Submit a Property
                </p>

                <h3 className="mt-5 text-4xl font-light md:text-5xl">
                  Tell Us About the Opportunity
                </h3>

                <p className="mt-6 text-lg leading-8 text-neutral-400">
                  Property owners, agents, and wholesalers can send Grace
                  One potential acquisition and redevelopment
                  opportunities.
                </p>
              </div>

              <form
                onSubmit={(event) =>
                  submitForm(
                    event,
                    "/api/property",
                    setPropertyStatus
                  )
                }
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    name="name"
                    required
                    placeholder="Your Name"
                    className={darkField}
                  />

                  <input
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className={darkField}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className={darkField}
                />

                <input
                  name="address"
                  required
                  placeholder="Property Address"
                  className={darkField}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <select
                    name="propertyType"
                    required
                    defaultValue=""
                    className={darkField}
                  >
                    <option value="" disabled>
                      Property Type
                    </option>
                    <option>Single Family</option>
                    <option>Townhome</option>
                    <option>Condo</option>
                    <option>Multifamily</option>
                    <option>Land</option>
                    <option>Other</option>
                  </select>

                  <input
                    name="askingPrice"
                    placeholder="Asking Price"
                    className={darkField}
                  />
                </div>

                <select
                  name="condition"
                  defaultValue=""
                  className={darkField}
                >
                  <option value="">Property Condition</option>
                  <option>Move-in ready</option>
                  <option>Needs light repairs</option>
                  <option>Needs major renovation</option>
                  <option>Vacant / distressed</option>
                  <option>Other</option>
                </select>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about the property, repairs, timeline, or opportunity..."
                  className={`${darkField} resize-none`}
                />

                <button
                  type="submit"
                  disabled={propertyStatus === "sending"}
                  className="bg-white px-9 py-4 text-sm uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ color: "#0a0a0a" }}
                >
                  {propertyStatus === "sending"
                    ? "Sending..."
                    : "Submit Property"}
                </button>

                {propertyStatus === "success" && (
                  <div
                    className="mt-6 border border-green-500 bg-green-950/30 p-5"
                    role="status"
                    aria-live="polite"
                  >
                    <p className="font-semibold text-green-300">
                      Thank you! Your property has been submitted.
                    </p>

                    <p className="mt-2 text-sm text-green-200">
                      Grace One Developments has received the property
                      information and will review the opportunity.
                    </p>
                  </div>
                )}

                {propertyStatus === "error" && (
                  <div
                    className="mt-6 border border-red-500 bg-red-950/30 p-5"
                    role="alert"
                  >
                    <p className="font-semibold text-red-300">
                      We couldn&apos;t submit the property.
                    </p>

                    <p className="mt-2 text-sm text-red-200">
                      Please check the information and try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-neutral-100 px-6 py-28 text-neutral-950 md:px-10"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Contact Grace One
            </p>

            <h2 className="mt-6 text-5xl font-light md:text-7xl">
              Let&apos;s Build Something
              <br />
              Meaningful.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Contact Grace One Developments about housing, remodeling,
              acquisitions, development opportunities, or partnerships.
            </p>
          </div>

          <form
            onSubmit={(event) =>
              submitForm(event, "/api/contact", setContactStatus)
            }
            className="mx-auto mt-14 max-w-3xl space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your Name"
                className={lightField}
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className={lightField}
              />
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className={lightField}
            />

            <select
              name="subject"
              required
              defaultValue=""
              className={lightField}
            >
              <option value="" disabled>
                What can we help you with?
              </option>
              <option>Housing</option>
              <option>Remodeling</option>
              <option>Property Acquisition</option>
              <option>Investment / Partnership</option>
              <option>General Question</option>
            </select>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="How can we help?"
              className={`${lightField} resize-none`}
            />

            <button
              type="submit"
              disabled={contactStatus === "sending"}
              className="w-full bg-neutral-950 px-9 py-4 text-sm uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-60"
              style={{ color: "#ffffff" }}
            >
              {contactStatus === "sending"
                ? "Sending..."
                : "Contact Grace One"}
            </button>

            {contactStatus === "success" && (
              <div
                className="mt-6 border border-green-700 bg-green-50 p-5"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold text-green-800">
                  Thank you! Your message has been received.
                </p>

                <p className="mt-2 text-sm text-green-700">
                  Grace One Developments has received your message. Our
                  team will respond as soon as possible.
                </p>
              </div>
            )}

            {contactStatus === "error" && (
              <div
                className="mt-6 border border-red-700 bg-red-50 p-5"
                role="alert"
              >
                <p className="font-semibold text-red-800">
                  We couldn&apos;t send your message.
                </p>

                <p className="mt-2 text-sm text-red-700">
                  Please check your information and try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-neutral-300">
              Grace One Developments
            </p>

            <p>Real Estate • Development • Investment</p>
          </div>

          <p>
            © {new Date().getFullYear()} Grace One Developments. All
            rights reserved.
          </p>

          <a href="#home" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}