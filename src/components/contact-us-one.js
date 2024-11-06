import { LitElement, html } from "lit";

class ContactSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="contact-us-one" class="bg-white mt-12 mb-12">
        <div class="container px-6 py-12 mx-auto">
          <div>
            <p class="font-medium text-[#0a8b7d] text-center">Contact us</p>
            <h1
              class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl text-center"
            >
              Chat to our friendly team
            </h1>
            <p class="mt-3 text-gray-500 text-center">
              We’d love to hear from you. Reach out via email or phone, and find
              our payment details below.
            </p>
          </div>

          <div
            class="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 max-w-[1200px] mx-auto"
          >
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span
                  class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 class="mt-4 text-base font-medium text-gray-800">Email</h2>
                <p class="mt-2 text-sm font-medium text-gray-500">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-sm text-[#0a8b7d]">
                  fastdesignindia@gmail.com
                </p>
              </div>

              <!-- Payment Options Section -->
              <div>
                <span
                  class="inline-block p-3 text-[#0a8b7d] rounded-full bg-blue-100/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 class="mt-4 text-base font-medium text-gray-800">
                  Payment Options
                </h2>
                <p class="mt-2 text-sm text-gray-500">
                  Account Holder: Rambabu Karnaina
                </p>
                <p class="mt-2 text-sm text-gray-500">
                  Account Number: 38196135125
                </p>
                <p class="mt-2 text-sm text-gray-500">IFSC Code: SBIN0021241</p>
                <p class="mt-2 text-sm text-gray-500">
                  PhonePe/GPay: 9182917184
                </p>
              </div>

              <div>
                <span
                  class="inline-block p-3 text-[#0a8b7d] rounded-full bg-blue-100/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 class="mt-4 text-base font-medium text-gray-800">Office</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Come say hello at our office.
                </p>
                <p class="mt-2 text-sm text-[#0a8b7d]">
                  Rajam RTC complex backside, near Narayana school, Andhra
                  Pradesh, Vizianagaram Dist, PIN: 532127
                </p>
              </div>

              <div>
                <span
                  class="inline-block p-3 text-[#0a8b7d] rounded-full bg-blue-100/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <h2 class="mt-4 text-base font-medium text-gray-800">Phone</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p class="mt-2 text-sm text-[#0a8b7d]">89775 69985</p>
              </div>
            </div>

            <!-- QR code and payment details image section -->
            <div
              class="p-4 py-6 rounded-lg bg-gray-50 md:p-8 flex justify-center items-center"
            >
              <img
                src="/images/qr code.webp"
                alt="Payment QR Code"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("contact-us-one", ContactSection);
