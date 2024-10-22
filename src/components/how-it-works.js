import { LitElement, html, css } from "lit";

class HowItWorks extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  static styles = css`
    .how-it-works {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
  `;

  render() {
    return html`
      <section class=" bg-gray-100 how-it-works py-24 ">
        <div class="max-w-[1200px] mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">How It Works</h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Card 1: Organize Your Images -->
            <div
              class="card bg-yellow-100 p-6 rounded-lg shadow-lg hover:bg-yellow-400"
            >
              <h3 class="text-xl font-bold mb-4">📁 Organize Your Images</h3>
              <p class="text-gray-700">
                - Create a folder for Important Photos (Imp Photos)<br />
                - Create another folder for Half Sheets
              </p>
            </div>

            <!-- Card 2: Send Your Images -->
            <div
              class="card bg-blue-100 p-6 rounded-lg shadow-lg hover:bg-blue-400"
            >
              <h3 class="text-xl font-bold mb-4">📧 Send Your Images</h3>
              <p class="text-gray-700">
                - Share the folders with us via email at
                <a href="mailto:fastdesignindia@gmail.com"
                  >fastdesignindia@gmail.com</a
                >
                <br />
                - Or send via WhatsApp
              </p>
            </div>

            <!-- Card 3: Advance Payment -->
            <div
              class="card bg-green-100 p-6 rounded-lg shadow-lg hover:bg-green-400"
            >
              <h3 class="text-xl font-bold mb-4">💰 Advance Payment</h3>
              <p class="text-gray-700">
                - Pay a minimum of 60% advance to secure your order.
              </p>
            </div>
          </div>

          <!-- CTA: Contact Us -->
          <div class="text-center mt-8">
            <a
              href="tel:+918977569985"
              class="inline-block bg-[#0a8b7d] text-white font-bold py-3 px-6  hover:bg-green-600 transition-colors duration-300"
            >
              Quick WhatsApp Enquiry
            </a>
            <p class="text-gray-700 mt-4">Booking & Queries: 8977569985</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("how-it-works", HowItWorks);
