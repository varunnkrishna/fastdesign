import { LitElement, html, css } from "lit";

export class NavbarTwo extends LitElement {
  static properties = {
    links: { type: Array },
    menuOpen: { type: Boolean },
    navBg: { type: String },
    navTextColor: { type: String },
    navTextHover: { type: String },
    buttonHoverColor: { type: String },
    logoUrl: { type: String }, // New property for logo URL
    logoText: { type: String }, // New property for logo text
  };

  createRenderRoot() {
    return this; // Ensure styles are not encapsulated
  }

  constructor() {
    super();
    this.menuOpen = false;
    //defauly nav color
    this.navBg = "bg-black";
    //default colors for navlinks
    this.navTextColor = "text-white";
    this.navTextHover = "text-gray-100";
    this.buttonHoverColor = "hover:bg-gray-900";

    // Default logo values
    this.logoUrl = "/images/fastdesignslogo.webp"; // Default logo image
    this.logoText = "FastDesign"; // Default logo text

    this.links = [
      { name: "About", href: "#AboutSection" },
      { name: "Works", href: "#GalleryOne" },
      { name: "Contact", href: "#contact-us-one" },
    ];
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  render() {
    const commonNavLinkClasses = "pl-4 pr-4 pt-2 pb-2";

    return html`
      <nav class="fixed w-full top-0 left-0 ${this.navBg} shadow-lg z-50">
        <div class="container mx-auto">
          <div class=" px-4 py-4 flex justify-between items-center">
            <!-- Use a default slot for the logo -->
            <div class="text-lg text-white font-bold">
              <!-- Default logo content in case no custom logo is provided -->
              <a
                href="/"
                class="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <img src="${this.logoUrl}" class="h-8" alt="Logo" />
                <span
                  class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >
                  ${this.logoText}
                </span>
              </a>
            </div>
            <button
              class="md:hidden block text-white"
              @click="${this.toggleMenu}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <!-- Dynamic Links Array -->
            <ul class="hidden md:flex space-x-4 text-gray-700">
              ${this.links.map(
                (link) => html`
                  <li>
                    <a
                      href="${link.href}"
                      class="${commonNavLinkClasses} ${this.navTextColor} ${this
                        .buttonHoverColor} rounded ${this.navTextHover}"
                      >${link.name}</a
                    >
                  </li>
                `
              )}

              <!-- WhatsApp CTA Button, separate styling -->
              <li>
                <a
                  href="https://wa.me/yourwhatsappnumber"
                  class="bg-[#0a8b7d] text-white py-2 px-4  hover:bg-green-600 transition-colors"
                >
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>

          <!-- Mobile Menu -->
          <div
            class="${this.menuOpen ? "block" : "hidden"} md:hidden ${this
              .navBg}"
          >
            <ul class="flex flex-col space-y-4 p-4 ${this.navTextColor}">
              ${this.links.map(
                (link) => html`
                  <li>
                    <a
                      href="${link.href}"
                      class="hover:text-blue-500"
                      @click="${this.closeMenu}"
                      >${link.name}</a
                    >
                  </li>
                `
              )}

              <!-- WhatsApp CTA Button for Mobile Menu -->
              <li>
                <a
                  href="https://wa.me/yourwhatsappnumber"
                  class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                  @click="${this.closeMenu}"
                >
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar-two", NavbarTwo);
