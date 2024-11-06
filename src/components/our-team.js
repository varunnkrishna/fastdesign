import { LitElement, html } from "lit";

class OurTeam extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="our-team" class="bg-amber-100/20 py-12">
        <div class="max-w-[1200px] px-6 py-12 mx-auto">
          <div class="text-center">
            <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">
              Our Team
            </h2>
            <p class="mt-3 text-gray-500">
              Our talented team is dedicated to delivering high-quality services
              with precision and creativity.
            </p>
          </div>

          <div
            class="grid grid-cols-2 gap-2 mt-10 md:grid-cols-4 lg:grid-cols-5 justify-center"
          >
            <!-- Team Member 1 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/9.webp"
                alt="Team Member 1"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Jaimin</p>
            </div>

            <!-- Team Member 2 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/2.webp"
                alt="Team Member 2"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Sanjana</p>
            </div>

            <!-- Team Member 3 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/3.webp"
                alt="Team Member 3"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">David</p>
            </div>

            <!-- Team Member 4 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/4.webp"
                alt="Team Member 4"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Surya</p>
            </div>

            <!-- Team Member 5 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/5.webp"
                alt="Team Member 5"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Saraswati</p>
            </div>

            <!-- Team Member 8 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/8.webp"
                alt="Team Member 8"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Hari</p>
            </div>

            <!-- Team Member 9 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/1.webp"
                alt="Team Member 9"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Indu</p>
            </div>

            <!-- Team Member 10 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/10.webp"
                alt="Team Member 10"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Mahesh</p>
            </div>

            <!-- Team Member 11 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/11.webp"
                alt="Team Member 11"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Sravani</p>
            </div>

            <!-- Team Member 12 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/12.webp"
                alt="Team Member 12"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">Prameela</p>
            </div>

            <!-- Team Member 13 -->
            <div class="flex flex-col items-center">
              <img
                src="/images/team/13.webp"
                alt="Team Member 13"
                class="w-24 h-24 rounded-full object-cover"
              />
              <p class="mt-2 text-sm font-medium text-gray-700">
                Vamshi Krishna
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("our-team", OurTeam);
