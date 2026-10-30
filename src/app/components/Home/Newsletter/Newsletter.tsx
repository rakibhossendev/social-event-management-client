
import { Mail, ArrowRight, Heart, Users } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground shadow-xl sm:px-12 lg:px-16 lg:py-20">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border-[40px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-white/5" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Mail className="size-4" />
                Stay Connected
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Be Part of Something
                <span className="text-green-200"> Meaningful.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Get updates about upcoming community events, volunteering
                opportunities, and inspiring stories delivered straight
                to your inbox.
              </p>

              {/* Community Stats */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-white/15">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Community</p>
                    <p className="text-xs text-white/70">Stay involved</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-white/15">
                    <Heart className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Positive Impact</p>
                    <p className="text-xs text-white/70">Make a difference</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Subscription Card */}
            <div className="rounded-2xl border border-white/20 bg-white p-6 text-gray-900 shadow-2xl sm:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Join Our Newsletter
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Be the first to know about events happening around you.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="newsletter-email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <button
                  type="button"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
                >
                  Subscribe Now
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <div className="mt-5 flex items-start gap-2 border-t border-gray-100 pt-5">
                <Heart className="mt-0.5 size-4 shrink-0 text-red-500" />
                <p className="text-xs leading-5 text-gray-500">
                  We respect your privacy. No spam, just meaningful
                  community updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
