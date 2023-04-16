import { LitElement, html, css } from "lit";

class SeeAllOption extends LitElement {
  static properties = {
    header: { type: String },
    opened: {
      type: Boolean,
      reflect: true,
    },
  };

  static styles = css`
    .video-reading-quiz-see-all {
      display: flex;
      padding: 10px;
    }

    .space-between-heading-and-button {
      margin-left: 20px;
    }

    details > summary {
      list-style: none;
      cursor: pointer;
    }

    .video-title {
      margin: 10px;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
    this.opened = false;
  }

  toggleEvent(e) {
    const state =
      this.shadowRoot.querySelector("see-all-button").getAttribute("open") ===
      ""
        ? true
        : false;
    this.opened = state;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "opened") {
        this.dispatchEvent(
          new CustomEvent("open-changed", {
            composed: true,
            bubbles: true,
            cacnelable: false,
            detail: {
              value: this[propName],
            },
          })
        );
      }
    });
  }

  render() {
    return html`
      <div class="video-reading-quiz-see-all">
        <div class="video-reading-quiz-heading">
          <div class="title">9 videos (Total 55 min). 3 reading, 1 quiz</div>
        </div>
        <div class="space-between-heading-and-button">
          <details
            class="see-all-button"
            .open=${this.opened}
            @toggle="${this.toggleEvent}"
          >
            <summary class="button-text">See all</summary>
            <div class="list-of-video">
              <div class="video-title">reeeeee</div>
              <div class="video-title">reeeeee</div>
              <div class="video-title">reeeeee</div>
              <div class="video-title">reeeeee</div>
              <div class="video-title">reeeeee</div>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define("see-all-option", SeeAllOption);
