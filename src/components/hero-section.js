import { LitElement, html } from "lit";
import Marquee3k from "marquee3000"; // Import Marquee3k

class HeroSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <div
        class="fixed left-0 top-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"
      >
        <span class="block sm:hidden">all</span>
        <span class="hidden sm:block md:hidden">sm</span>
        <span class="hidden md:block lg:hidden">md</span>
        <span class="hidden lg:block xl:hidden">lg</span>
        <span class="hidden xl:block 2xl:hidden">xl</span>
        <span class="hidden 2xl:block">2xl</span>
      </div>

      <section class="bg-white">
        <div class="grid grid-cols-1  md:grid-cols-2">
          <!-- Image Column -->
          <div
            class="relative w-auto lg:w-11/12 lg:h-screen order-2 md:order-1 sm:pt-4"
          >
            <img
              src="/images/heroimage.webp"
              alt="Beautiful Mehendi Design"
              loading="lazy"
              class="h-[400px] w-full object-cover md:h-full"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            ></div>
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
                  Professional Photo Editing for Stunning Prints
                </h1>
                <p
                  class="mt-8 text-lg font-inter font-medium tracking-tight text-[#464442]"
                >
                  We work with photographers to enhance and transform their
                  photos into beautifully edited, print-ready photos. Whether
                  it’s wedding photography, pre-marriage shoots, or any special
                  event.
                </p>
                <p
                  class="hidden md:block mt-4 text-lg font-inter font-medium tracking-tight text-[#464442]"
                >
                  FastDesigns is your trusted partner for high-quality, flawless
                  photo edits
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
                🚀 <span class="text-red-600">Limited Time Offer:</span> Premium
                Designs for just <span class="line-through">₹100</span> ₹70! 🚀
              </div>
            </div>

            <div
              class="flex flex-col gap-2 lg:flex-row pt-10 lg:pb-40 justify-center items-center md:justify-start"
            >
              <a
                href="#book-appointment"
                aria-label="Book appointment"
                class="bg-[#0a8b7d] text-white py-3 px-6 w-48 text-center hover:bg-[#404F58] transition whitespace-normal transition:background-color 0.3s ease"
              >
                View Gallary
              </a>
              <a
                href="#book-appointment"
                class="bg-black text-white py-3 px-6 w-60 text-center hover:bg-[#9e5248] transition whitespace-normal transition:background-color 0.3s ease"
              >
                Call: 123456789
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
