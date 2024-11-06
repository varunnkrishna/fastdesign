import { LitElement, html, css } from "lit";

class WhatsAppButton extends LitElement {
  static styles = css`
    .whatsapp-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25d366;
      border-radius: 50%;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .whatsapp-btn:hover {
      transform: scale(1.1);
    }

    .whatsapp-btn img {
      width: 50px;
      height: 50px;
    }
  `;

  render() {
    return html`
      <a
        href="https://wa.me/918977569985"
        target="_blank"
        class="whatsapp-btn"
        title="Chat with us"
      >
        <img src="/images/whatsapp2.webp" alt="WhatsApp" />
      </a>
    `;
  }
}

customElements.define("whatsapp-button", WhatsAppButton);
