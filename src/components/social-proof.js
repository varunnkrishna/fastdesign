import { LitElement, html } from "lit";

class SocialProof extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section
        class="bg-black h-auto flex flex-col justify-center items-center  pt-24 pl-12 pr-12 pb-24"
      >
        <!-- Title -->
        <h2
          class="text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-100  font-semibold text-2xl leading-[25.2px] tracking-tight text-center"
        >
          Trusted by Photographers for Professional Photo Editing and Design
          Solution
        </h2>

        <!-- Logo Container -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-8 w-full max-w-6xl"
        >
          <!-- Add 6 logos here -->
          <img
            src="/images/annams.jpg"
            alt="plick designs client 1"
            class="object-contain h-[60px] w-auto mx-auto rounded-lg"
          />
          <img
            src="/images/CHIRU IMAGES RAJAM.jpg"
            alt="plick designs client 2"
            class="object-contain h-[60px] w-auto mx-auto rounded-lg"
          />
          <img
            src="/images/DILLE DIGITAL NJD.jpg"
            alt="plick designs client 3"
            class="object-contain h-[60px] w-auto mx-auto rounded-lg"
          />
          <img
            src="/images/GANDHI DIGI SKLM.jpg"
            alt="plick designs client 4"
            class="object-contain h-[60px] w-auto mx-auto rounded-lg"
          />
          <img
            src="/images/KALYANI DIGITAL SKLM.jpg"
            alt="plick designs client 5"
            class="object-contain h-[60px] w-auto mx-auto rounded-lg"
          />
          <img
            src="/images/S PHOTOGRAPHY RAJAM.jpg"
            alt="plick designs client 6"
            class="object-contain h-[60px] w-auto mx-auto rounded-lg"
          />
        </div>
      </section>
    `;
  }
}

customElements.define("social-proof", SocialProof);
