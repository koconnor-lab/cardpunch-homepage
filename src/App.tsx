import {
  Clock,
  MapPin,
  Shield,
  BarChart3,
  Users,
  CalendarDays,
  Smartphone,
  Zap,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Star,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

// ── Nav ─────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <Clock className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Card<span className="text-brand">Punch</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors">
            Sign In
          </a>
          <a href="#cta" className="text-sm font-semibold text-white bg-brand hover:bg-brand-dark px-5 py-2.5 rounded-full transition-colors">
            Start Free Trial
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 p-1">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pb-6 space-y-4">
          <a href="#features" onClick={() => setOpen(false)} className="block text-gray-700 py-1">Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block text-gray-700 py-1">How It Works</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-gray-700 py-1">Pricing</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block text-gray-700 py-1">Testimonials</a>
          <div className="pt-2 space-y-2">
            <a href="#" className="block text-center text-gray-700 font-medium py-2">Sign In</a>
            <a href="#cta" className="block text-center text-white bg-brand font-semibold py-3 rounded-full">Start Free Trial</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Zap className="w-4 h-4" />
          Built for modern teams
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
          Time tracking that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
            just works
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          GPS-verified clock-ins, smart scheduling, and real-time labor insights.
          CardPunch replaces your punch cards, spreadsheets, and guesswork with one powerful app.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#cta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-brand/25"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-700 font-medium text-lg px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">No credit card required. Free for up to 5 employees.</p>
      </div>

      {/* Hero visual — app mockup */}
      <div className="max-w-5xl mx-auto mt-16 relative">
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white border border-gray-200 rounded-lg text-xs text-gray-400 px-4 py-1">
                app.cardpunch.app
              </div>
            </div>
          </div>
          <div className="p-6 md:p-10 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashCard title="Clocked In" value="24" subtitle="of 31 scheduled" color="blue" />
              <DashCard title="Hours Today" value="186.5" subtitle="$4,662 labor cost" color="green" />
              <DashCard title="Late Arrivals" value="2" subtitle="flagged for review" color="amber" />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-medium text-gray-500 mb-3">Live Activity</p>
                <div className="space-y-3">
                  {[
                    { name: "Sarah M.", action: "Clocked in", time: "8:02 AM", loc: "Downtown" },
                    { name: "James K.", action: "Started break", time: "10:15 AM", loc: "Westside" },
                    { name: "Maria R.", action: "Clocked out", time: "5:01 PM", loc: "Downtown" },
                  ].map((e, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-bold">
                          {e.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{e.name}</p>
                          <p className="text-xs text-gray-400">{e.action} &middot; {e.loc}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{e.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-medium text-gray-500 mb-3">Weekly Hours</p>
                <div className="flex items-end gap-3 h-32">
                  {[65, 80, 90, 70, 95, 40, 20].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-brand/15 rounded-t-md transition-all"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className="w-full bg-brand rounded-t-md"
                          style={{ height: `${Math.min(h, 75)}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashCard({ title, value, subtitle, color }: { title: string; value: string; subtitle: string; color: string }) {
  const colors: Record<string, string> = {
    blue: "from-blue-500 to-blue-600",
    green: "from-emerald-500 to-emerald-600",
    amber: "from-amber-500 to-amber-600",
  };
  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-xl p-5 text-white`}>
      <p className="text-sm font-medium text-white/80">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
      <p className="text-sm text-white/70 mt-1">{subtitle}</p>
    </div>
  );
}

// ── Logos ────────────────────────────────────────────────────────

function LogoStrip() {
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-6">
          Trusted by teams everywhere
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
          {["FastBurger Co.", "CleanPro Services", "Metro Retail", "Harbor Hotels", "Summit Health"].map((name) => (
            <span key={name} className="text-lg font-bold text-gray-900">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features ────────────────────────────────────────────────────

const features = [
  {
    icon: MapPin,
    title: "GPS-Verified Clock-Ins",
    desc: "Employees can only clock in when they're physically at the job site. No more buddy punching or false entries.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    desc: "Drag-and-drop schedule builder with shift templates, availability tracking, and automatic conflict detection.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Real-Time Labor Insights",
    desc: "See live labor costs, overtime alerts, and department breakdowns. Export to QuickBooks, ADP, or Gusto.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    desc: "Your team clocks in from their phone or a shared kiosk. Managers approve timesheets on the go.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    desc: "Six configurable roles from Employee to System Admin. Each sees exactly what they need — nothing more.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Users,
    title: "Multi-Location Support",
    desc: "Manage multiple locations and departments from one dashboard. Assign employees across sites effortlessly.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Everything you need to manage your workforce
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            From clock-in to payroll export, CardPunch handles the entire time-tracking lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Set up your organization",
    desc: "Add your locations, departments, and team members. Import from a spreadsheet or add them one by one.",
  },
  {
    num: "02",
    title: "Build your schedule",
    desc: "Create shifts with our drag-and-drop builder. Set recurring templates or build week by week.",
  },
  {
    num: "03",
    title: "Employees clock in",
    desc: "Your team uses the mobile app or a shared kiosk. GPS verifies they're on-site. Photos optional.",
  },
  {
    num: "04",
    title: "Review and export",
    desc: "Approve timesheets, review overtime, and export to payroll with one click. Done.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="text-gray-500 mt-4 text-lg">No consultants, no onboarding calls. Just sign up and go.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-4xl font-extrabold text-brand/20">{s.num}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ─────────────────────────────────────────────────────

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For small teams getting started",
    features: ["Up to 5 employees", "GPS clock-in/out", "Basic scheduling", "Mobile app access", "Email support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business",
    price: "$4",
    period: "/employee/mo",
    desc: "For growing businesses",
    features: [
      "Unlimited employees",
      "Everything in Starter",
      "Multi-location support",
      "Payroll integrations",
      "Labor cost reports",
      "Role-based access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations",
    features: [
      "Everything in Business",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 ${
                p.featured
                  ? "bg-brand text-white shadow-xl shadow-brand/20 ring-2 ring-brand scale-[1.02]"
                  : "bg-white border border-gray-200"
              }`}
            >
              <p className={`text-sm font-semibold uppercase tracking-wider ${p.featured ? "text-blue-200" : "text-brand"}`}>
                {p.name}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${p.featured ? "text-white" : "text-gray-900"}`}>{p.price}</span>
                {p.period && <span className={`text-sm ${p.featured ? "text-blue-200" : "text-gray-500"}`}>{p.period}</span>}
              </div>
              <p className={`text-sm mt-2 ${p.featured ? "text-blue-100" : "text-gray-500"}`}>{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${p.featured ? "text-blue-200" : "text-brand"}`} />
                    <span className={`text-sm ${p.featured ? "text-blue-50" : "text-gray-700"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center font-semibold py-3 rounded-full mt-8 transition-colors ${
                  p.featured
                    ? "bg-white text-brand hover:bg-blue-50"
                    : "bg-brand text-white hover:bg-brand-dark"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ────────────────────────────────────────────────

const testimonials = [
  {
    quote: "We cut payroll processing time by 70%. What used to take half a day now takes 20 minutes.",
    name: "Jessica Torres",
    role: "Operations Manager, CleanPro Services",
    stars: 5,
  },
  {
    quote: "The GPS verification alone paid for itself. We eliminated buddy punching completely in week one.",
    name: "Mike Chen",
    role: "Owner, FastBurger Co.",
    stars: 5,
  },
  {
    quote: "My team actually likes using it. That's never happened with a time tracking tool before.",
    name: "Rachel Kim",
    role: "HR Director, Metro Retail",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Loved by teams who ship
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ─────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-brand to-blue-700 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to ditch the spreadsheets?
            </h2>
            <p className="text-blue-100 mt-4 text-lg max-w-xl mx-auto">
              Join thousands of businesses that trust CardPunch to track time, manage schedules, and run payroll effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-brand font-semibold text-lg px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
              >
                Start Free Trial
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-medium text-lg px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              >
                Schedule a Demo
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">Free for up to 5 employees. No credit card needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <Clock className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">
                Card<span className="text-brand">Punch</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Modern time tracking for modern teams. GPS-verified, mobile-first, effortless.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">Product</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-gray-700">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-700">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-700">Integrations</a></li>
              <li><a href="#" className="hover:text-gray-700">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">Company</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700">About</a></li>
              <li><a href="#" className="hover:text-gray-700">Blog</a></li>
              <li><a href="#" className="hover:text-gray-700">Careers</a></li>
              <li><a href="#" className="hover:text-gray-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-700">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-700">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CardPunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ── App ─────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
