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
                class="inline-block py-1 px-3 rounded-md bg-[#0a8b7d] text-white text-sm font-semibold mb-4"
              >
                About Us
              </span>

              <!-- Section Title -->
              <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Hi, <span class="text-[#0a8b7d]">I’m Pardhu</span> – CEO of
                FastDesign
              </h2>

              <span
                class="inline-block py-1 px-3 rounded-md bg-green-800/10 text-black text-sm font-semibold mb-4"
              >
                A Graphic Designer with 10+ Years of Expertise
              </span>

              <h2 class = "block text-sm  p-2 text-left rounded-sm font-semibold"><h2> 

              <!-- Engaging Text -->
              <p class="text-lg text-gray-600 mb-6">
                Passionate about creating beautiful designs, I founded FastDesign to help photographers and businesses bring their ideas to life. With a dedicated team and a focus on on-time delivery, data security, and creativity, we deliver high-quality albums and digital designs that exceed expectations.
              </p>

              <!-- Highlighted Services List -->
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  
                  <p class="text-lg text-gray-800">
                   ✓ On-time Delivery 📅
                  </p>
                </li>
                <li class="flex items-start">
                  
                  
                  <p class="text-lg text-gray-800">
                   ✓ Competitive Pricing 💰
                  </p>
                </li>
                <li class="flex items-start">
                  
                  <p class="text-lg text-gray-800">
                   ✓ Global Availability 🌎
                  </p>
                </li>
                <li class="flex items-start">
                  
                  <p class="text-lg text-gray-800">
                   ✓ Beautiful Family Portraits
                  </p>
                </li>
              </ul>

              <!-- CTA Button -->
              <div class="flex justify-start mb-8">
                <a
                  href="https://wa.me/918977569985" target = "_blank"
                  class="bg-[#0a8b7d] text-white font-semibold py-3 px-6  shadow-lg hover:bg-[#087961] transition duration-300"
                >
                  Quick Whatsapp Enquiry
                </a>
              </div>

              <!-- Testimonial Section -->
              <div class="flex items-center">
              
                <div>

                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded-lg shadow-xl"
              alt="FastDesign services"
              src="/images/fastdesignCEO.webp"
            />
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("about-us", AboutSection);
