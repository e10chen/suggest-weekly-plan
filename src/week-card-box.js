import { LitElement, html, css } from "lit";
import "./see-all-option.js";

class WeekCardBox extends LitElement {
  static properties = {
    header: { type: String },
    opened: {
      type: Boolean,
      reflect: true,
    },
  };

  static styles = css`
    .week-card {
      display: flex;
      height: 100px
      border: 1px solid black;
    }

    .week-number {
      width: 30%;
      display: inline-block;
      text-align: center;
    }

    .syllabus-module {
      flex-grow: 1;
      padding-bottom: 20px;
      border-bottom: 1px solid red;
    }

    .time-to-complete {
      padding: 10px;
    }

    .headline {
      padding: 10px;
    }

    .description {
      padding: 10px;
    }

    .week-text {
      padding: 25px;
    }

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
      <div class="week-card">
        <div class="week-number">
          <div class="week-text">Week</div>
          <div class="number">1</div>
        </div>

        <div class="syllabus-module">
          <div class="time-to-complete">2 hours to complete</div>
          <div class="headline">Misconceptions about happiness</div>
          <div class="description">
            In this module, you will learn what it means to be happy and why
            pursuing happiness is not a pointless endeavor. Dr. Santos addresses
            how our minds lie to us and how the science shows that our
            misconceptions about money, grades, and social media are holding us
            back from implementing the techniques studied in positive
            psychology.
          </div>
          <div class="video-reading-quiz-see-all">
            <div class="video-reading-quiz-heading">
              <div class="title">
                9 videos (Total 55 min). 3 reading, 1 quiz
              </div>
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
        </div>
      </div>
    `;
  }
}

customElements.define("week-card-box", WeekCardBox);
