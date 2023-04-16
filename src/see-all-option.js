import { LitElement, html, css } from "lit";

class SeeAllOption extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .video-reading-quiz-see-all {
      display: flex;
      padding: 10px;
    }

    .space-between-heading-and-button {
        margin-left: 20px;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <div class="video-reading-quiz-see-all">
        <div class="video-reading-quiz-heading">
          <div class="title">9 videos (Total 55 min). 3 reading, 1 quiz</div>
        </div>
        <div class="space-between-heading-and-button">
          <button class="see-all-button">
            <div class="button-text">See all</div>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("see-all-option", SeeAllOption);
