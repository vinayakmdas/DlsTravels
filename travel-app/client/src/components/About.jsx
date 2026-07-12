import {
  ShieldCheck,
  Car,
  BadgeDollarSign,
  Headset,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Professional Drivers",
      description:
        "Experienced, licensed, and friendly drivers for a safe journey.",
    },
    {
      icon: <Car size={24} />,
      title: "Comfortable Vehicles",
      description:
        "Clean AC & Non-AC vehicles suitable for families and groups.",
    },
    {
      icon: <BadgeDollarSign size={24} />,
      title: "Affordable Pricing",
      description:
        "Transparent pricing with no hidden charges.",
    },
    {
      icon: <Headset size={24} />,
      title: "24/7 Support",
      description:
        "We're always available whenever you need assistance.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
            ABOUT DLS TRAVELS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Travel with{" "}
            <span className="text-brand-primary">
              Comfort, Safety
            </span>{" "}
            & Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            DLS Travels provides reliable taxi and tour services
            across Kerala. Whether you're planning a one-way trip,
            airport transfer, family vacation, or complete tour
            package, we ensure comfortable vehicles, professional
            drivers, and transparent pricing for every journey.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex-1">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
            alt="Travel"
            className="h-[550px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute -left-6 top-10 rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="text-3xl font-bold text-brand-primary">
              5+
            </h3>
            <p className="text-gray-600">
              Years Experience
            </p>
          </div>

          <div className="absolute -bottom-6 right-8 rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="text-3xl font-bold text-brand-primary">
              24/7
            </h3>
            <p className="text-gray-600">
              Customer Support
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        <div>
          <h3 className="text-4xl font-bold text-brand-primary">
            2000+
          </h3>
          <p className="mt-2 text-gray-600">
            Happy Customers
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-brand-primary">
            100+
          </h3>
          <p className="mt-2 text-gray-600">
            Destinations
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-brand-primary">
            24/7
          </h3>
          <p className="mt-2 text-gray-600">
            Customer Support
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-brand-primary">
            100%
          </h3>
          <p className="mt-2 text-gray-600">
            Safe Journey
          </p>
        </div>
      </div>
    </section>
  );
}