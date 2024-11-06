import { LitElement, html } from "lit";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

class GalleryTwo extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="GalleryTwo" class="pt-24 pb-24 bg-slate-900 ">
        <div class=" ">
          <h2 class="text-4xl font-bold text-center text-white mb-4">
            Our Works
          </h2>
          <p class="text-lg text-gray-200 text-center max-w-[800px] mx-auto">
            With 10 years of expertise, our talented team is dedicated to
            delivering top-notch designs.Take a look at some of our most recent
            projects.
          </p>

          <div class="p-5 sm:p-8">
            <div
              class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8"
            >
              <a data-gallery="gallery1">
                <img src="/images/gallery/1.webp" alt="Image 1" />
              </a>

              <img src="/images/gallery/2.webp" />
              <img src="/images/gallery/3.webp" />
              <img src="/images/gallery/4.webp" />
              <img src="/images/gallery/5.webp" />
              <img src="/images/gallery/6.webp" />
              <img src="/images/gallery/7.webp" />
              <img src="/images/gallery/8.webp" />
              <img src="/images/gallery/9.webp" />
              <img src="/images/gallery/10.webp" />
              <img src="/images/gallery/11.webp" />
              <img src="/images/gallery/12.webp" />
              <img src="/images/gallery/13.webp" />
              <img src="/images/gallery/14.webp" />
              <img src="/images/gallery/15.webp" />
              <img src="/images/gallery/16.webp" />
            </div>
          </div>

          <!-- CTA Button to View Full Gallery -->
          <div class="text-center mt-8">
            <a
              href="https://drive.google.com/drive/folders/1jHnxrtmDKLseCwC5rBNNJ0U9qYWDaz9-?usp=drive_link"
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

customElements.define("gallery-two", GalleryTwo);
