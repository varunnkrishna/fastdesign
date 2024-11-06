import { LitElement, html } from "lit";
import Marquee3k from "marquee3000"; // Import Marquee3k

class HeroSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section class="bg-white">
        <div class="grid grid-cols-1  md:grid-cols-2">
          <!-- Image Column -->
          <div
            class="relative w-auto lg:w-11/12 lg:h-screen order-2 md:order-1 sm:pt-4"
          >
            <img
              src="/images/herobg.webp"
              alt="Beautiful Mehendi Design"
              loading="lazy"
              class="h-[400px] w-full object-cover md:h-full"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            ></div>

            <div class="absolute bottom-0 left-0 sm:hidden lg:block">
              <div class="p-4 sm:p-6 lg:p-8">
                <div class="flex items-center">
                  <h2 class="font-bold text-white text-7xl ml-2.5">
                    Over 500+
                  </h2>
                  <svg
                    class="w-10 h-10 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="max-w-xs mt-1.5 text-xl pl-4 text-white">
                  Photographers Trust Us for High-Quality Edits and Fast
                  Delivery
                </p>
              </div>
            </div>
          </div>

          <!-- Text Column -->
          <div
            class=" flex flex-col items-center justify-center md:items-start pt-24 pr-10 pl-10 md:pl-10 md:pt-40 md:pb-20 lg:pt-40 lg:pr-20 lg:pl-6 lg:pb-0 text-center md:text-left order-1 md:order-2"
          >
            <div>
              <div class="pl-10 pr-10 md:p-0">
                <h1
                  class="font-inter tracking-tighter text-4xl font-bold text-[#433232] md:text-4xl xl:text-5xl"
                >
                  Professional Photo Editing for Photographers and Businesses
                </h1>
                <p
                  class="mt-8 text-lg font-inter font-medium tracking-tight text-[#464442]"
                >
                  We specialize in enhancing and editing photos for
                  photographers and businesses, delivering high-quality,
                  print-ready images that meet your unique need.
                </p>

                <p
                  class="mt-8 text-lg font-inter font-medium tracking-tight text-[#464442]"
                >
                  Let’s work together and make something amazing! 🚀
                </p>
              </div>

              <!-- Marquee Container with adjusted overflow settings -->
              <div class="relative mt-4 mb-4">
                <div class="absolute left-0 right-0  overflow-hidden">
                  <div
                    class="p-4 marquee3k"
                    data-speed="0.5"
                    data-pausable="true"
                  >
                    <div class="flex gap-2 justify-center md:justify-start">
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Wedding Photo Editing
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Pre-Wedding Photo Editing
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Birthday Photo Editing
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Engagement Photo Editing
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Maternity Photo Editing
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Corporate Photo Editing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-20">
              <div
                class="bg-[#B5E2FA]/50 text-black py-2 px-4 rounded-md mt-4 text-center font-semibold"
              >
                🚀 <span class="text-red-600">Limited Time Offer:</span> First
                order discount for new customers!
              </div>
            </div>

            <div
              class="flex flex-col gap-2 lg:flex-row pt-10 lg:pb-40 justify-center items-center md:justify-start"
            >
              <a
                href="https://wa.me/918977569985"
                target="_blank"
                aria-label="Book appointment"
                class="bg-[#0a8b7d] text-white py-3 px-6 w-48 text-center hover:bg-[#404F58] transition whitespace-normal transition:background-color 0.3s ease shadow-lg"
              >
                Whatsapp Enquiry
              </a>
              <a
                href="tel:+918977569985"
                class="bg-black text-white py-3 px-6 w-60 text-center hover:bg-gray-700 transition whitespace-normal transition:background-color 0.3s ease shadow-lg"
              >
                Call: +91 8977569985
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    // Initialize Marquee
    Marquee3k.init();
  }
}

customElements.define("hero-section", HeroSection);
