import { LitElement, html } from "lit";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

class GalleryOne extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="GalleryOne" class="pt-24 pb-24 bg-slate-900 ">
        <div class="max-w-[1200px] mx-auto ">
          <h2 class="text-4xl font-bold text-center text-white mb-4">
            Our Works
          </h2>
          <p class="text-lg text-gray-200 text-center max-w-[800px] mx-auto">
            With 10 years of expertise, our talented team is dedicated to
            delivering top-notch designs.Take a look at some of our most recent
            projects.
          </p>

          <!-- Image Gallery -->
          <div class="container mx-auto px-5 py-8 lg:px-12 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <a
                    href="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                    class="glightbox"
                    data-gallery="gallery1"
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <a
                    href="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    class="glightbox"
                    data-gallery="gallery1"
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="w-full p-1 md:p-2">
                  <a
                    href="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    class="glightbox"
                    data-gallery="gallery1"
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <a
                    href="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                    class="glightbox"
                    data-gallery="gallery1"
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <a
                    href="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    class="glightbox"
                    data-gallery="gallery1"
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <a
                    href="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                    class="glightbox"
                    data-gallery="gallery1"
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Button to View Full Gallery -->
          <div class="text-center mt-8">
            <a
              href="https://drive.google.com/drive/folders/your-folder-link"
              target="_blank"
              class="bg-[#0a8b7d] hover:bg-[#0a8b7cf0] text-white font-bold py-3 px-8  transition duration-300"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      closeButton: true,
      slideEffect: "fade",
      keyboardNavigation: true,
    });
  }
}

customElements.define("gallery-one", GalleryOne);
