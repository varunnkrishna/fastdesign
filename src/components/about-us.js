import { LitElement, html } from "lit";

class AboutSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="AboutSection" class="body-font p-5 bg-white">
        <div
          class="mx-auto flex px-5 md:flex-row flex-col items-center max-w-[1200px] py-8"
        >
          <!-- Left Column: Text Content -->
          <div
            class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center"
          >
            <div class="w-full">
              <!-- Badge / Tagline -->
              <span
                class="inline-block py-1 px-3 rounded-full bg-[#0a8b7d] text-white text-sm font-semibold mb-4"
              >
                Our Expertise
              </span>

              <!-- Section Title -->
              <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Welcome to <span class="text-[#0a8b7d]">FastDesigns</span>
              </h2>

              <!-- Engaging Text -->
              <p class="text-lg text-gray-600 mb-6">
                At FastDesigns, we are passionate about turning life’s precious
                moments into timeless memories. Whether you need stunning
                wedding albums, flawless event photos, or family portraits, we
                bring your vision to life through professional editing and
                exceptional service.
              </p>

              <!-- Highlighted Services List -->
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <span
                    class="inline-block w-4 h-4 bg-[#0a8b7d] text-white text-center rounded-full mr-3 font-bold"
                    >•</span
                  >
                  <p class="text-lg text-gray-800">
                    Exclusive Wedding Photography
                  </p>
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-4 h-4 bg-[#0a8b7d] text-white text-center rounded-full mr-3 font-bold"
                    >•</span
                  >
                  <p class="text-lg text-gray-800">
                    Creative Pre-Wedding Shoots
                  </p>
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-4 h-4 bg-[#0a8b7d] text-white text-center rounded-full mr-3 font-bold"
                    >•</span
                  >
                  <p class="text-lg text-gray-800">
                    Professional Event Photography
                  </p>
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-4 h-4 bg-[#0a8b7d] text-white text-center rounded-full mr-3 font-bold"
                    >•</span
                  >
                  <p class="text-lg text-gray-800">
                    Beautiful Family Portraits
                  </p>
                </li>
              </ul>

              <!-- CTA Button -->
              <div class="flex justify-start mb-8">
                <a
                  href="/contact"
                  class="bg-[#0a8b7d] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#087961] transition duration-300"
                >
                  Contact Us Today
                </a>
              </div>

              <!-- Testimonial Section -->
              <div class="flex items-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png"
                  alt="CEO of FastDesign"
                  class="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p class="font-bold text-gray-800">Venkatech</p>
                  <p class="text-gray-500 text-sm">CEO of FastDesign</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="FastDesign services"
              src="/images/heroimage.webp"
            />
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("about-us", AboutSection);
