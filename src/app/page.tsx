import { CtaButton } from "@/components/ui/cta-button";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import RecentEventsSection from "./recent-events-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 1400 600' preserveAspectRatio='none' width='1400' height='600'%3E%3Cdefs%3E%3CradialGradient id='gggrain-gradient' r='0.5'%3E%3Cstop offset='0%25' stop-color='hsl(0, 100%25, 60%25)'%3E%3C/stop%3E%3Cstop offset='50%25' stop-color='hsl(45, 100%25, 50%25)'%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='hsla(282, 83%25, 49%25, 1.00)'%3E%3C/stop%3E%3C/radialGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.55' numOctaves='2' seed='2' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix'   result='componentTransfer'%3E%3CfeFuncR type='linear' slope='3'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='3'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='3'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -11'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='1' style='mix-blend-mode: soft-light'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\")",
        }}
        className="relative bg-cover bg-center bg-no-repeat text-white"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-8 space-y-6 lg:mb-0 lg:w-1/2">
              <h1 className="text-3xl font-bold text-pretty leading-tight sm:text-4xl lg:text-5xl">
                Empowering Children Through Mindfulness and Yoga
              </h1>
              <p className="text-lg text-pretty text-gray-200 sm:text-xl">
                Join us in nurturing your child&apos;s mind, body, and spirit
                through our specially crafted classes.
              </p>
              <Link href="#">
                <CtaButton>
                  Schedule an Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CtaButton>
              </Link>
            </div>
            <div className="lg:w-1/2 w-full max-w-2xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg outline-purple-950 outline outline-offset-2">
                <div className="absolute inset-0 bg-muted animate-pulse"></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/brdV2NhtvyM?si=00IRUecjxT6kzpLc&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;start=101&amp;cc_load_policy=1&amp;hl=en&amp;cc_lang_pref=en&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                  title="Batang Bathala Featured in Bilyonaryo News"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
            Our Guiding Principles
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Vision",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                content:
                  "Empowering the holistic well-being of the youth through Mindfulness and Yoga. ",
              },
              {
                title: "Mission",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                content:
                  "To provide a safe space for self-reflection, personal exploration, and healthy peer interactions where children can build confidence, explore their abilities, and honor their limitations. ",
              },
              {
                title: "Goal",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                content:
                  "To transform children into superheroes who can make the world a better place, one mindful choice at a time. ",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-center text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-center text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
            Meet Your Teacher
          </h2>
          <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-12 md:space-y-0">
            <img
              src="https://drive.google.com/thumbnail?id=1iS9Y3fkz_1wCuWEf5GBkf60axB6i1ERZ&sz=w200"
              alt="Teacher Teddy"
              className="h-48 w-48 rounded-full border-4 border-purple-600 object-cover shadow-lg"
            />
            <div className="space-y-4 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                Teacher Teddy
              </h3>
              <p className="prose prose:base text-base text-gray-600 sm:text-lg">
                Hello, I am Teacher Teddy! I am a licensed early childhood
                educator and a certified children&apos;s mindfulness & yoga
                teacher, trained at{" "}
                <Link
                  href="https://yogaforkidsbali.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yoga for Kids Bali Indonesia
                </Link>
                .
              </p>
              <p className="text-base text-gray-600 sm:text-lg">
                Throughout my teaching experience, I have been very passionate
                about working closely with children of all abilities and
                neuro-divergent learners to offer support in their holistic
                wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RecentEventsSection />
      <footer className="bg-gray-800 py-6 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link
              href="https://www.instagram.com/batangbathala"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-secondary"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61564865915067"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-secondary"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
          <p>&copy; 2024 Batang Bathala. All rights reserved.</p>
          <p className="mt-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-yellow-300"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-yellow-300"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
