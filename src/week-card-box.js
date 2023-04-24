import { LitElement, html, css } from "lit";

class WeekCardBox extends LitElement {
  static properties = {
    header: { type: String },
    opened: {
      type: Boolean,
      reflect: true,
    },
    weeknumber: { type: Number },
    timetocomplete: { type: Number },
    headline: { type: String },
    description: { type: String },
    textseeall: { type: String },
    numberofvideos: { type: Number },
    numberofreadings: { type: Number },
    numberofquizzes: { type: Number },
    totalminutecompletion: { type: Number },
    videoArray: { type: Array },
    readingArray: { type: Array },
    quizArray: { type: Array },
  };

  static styles = css`
    :host{
      display: block;
      justify-content: left;
    }

    .week-card {
      display: flex;
      height: 100px
      border: 1px solid black;
    }

    .week-number {
      width: 400px;
      display: inline-block;
      text-align: center;
    }

    .syllabus-module {
      width: 2000px;
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

    .button-text {
      color: #0056d2;

    }

    .number-of-videos {
      padding: 10px;
      margin-top: 10px;
      border-top: 1px solid red;
      border-bottom: 1px solid red;
    }

    .number-of-readings {
      padding: 10px;
      border-bottom: 1px solid red;
    }

    .number-of-quizzes{
      padding: 10px;
      border-bottom: 1px solid red;
    }


  `;

  constructor() {
    super();
    this.header = "My app";
    this.opened = false;
    this.weeknumber = "1";
    this.timetocomplete = "4";
    this.headline = "Something idk";
    this.description =
      "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.";
    this.opened = false;
    this.numberofvideos = "4 ";
    this.numberofreadings = "10 ";
    this.numberofquizzes = "1 ";
    this.totalminutecompletion = "55 ";
    this.videoArray = [];
    this.readingArray = [];
    this.quizArray = [];
  }

  toggleEvent(e) {
    const state =
      this.shadowRoot.querySelector(".see-all-button").getAttribute("open") ===
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

  seealltext(opened) {
    if (this.opened === true) {
      return "See less";
    } else {
      return "See all";
    }
  }

  render() {
    return html`
      <div class="week-card">
        <div class="week-number">
          <div class="week-text">Week</div>
          <div class="number">${this.weeknumber}</div>
        </div>

        <div class="syllabus-module">
          <div class="time-to-complete">
            ${this.timetocomplete} hours to complete
          </div>
          <div class="headline">${this.headline}</div>
          <div class="description">${this.description}</div>
          <div class="video-reading-quiz-see-all">
            <div class="video-reading-quiz-heading">
              <div class="video-reading-quiz-title">
                ${this.numberofvideos} videos (Total
                ${this.totalminutecompletion} min) ${this.numberofreadings}
                reading, ${this.numberofquizzes} quiz
              </div>
            </div>
            <div class="space-between-heading-and-button">
              <details
                class="see-all-button"
                .open=${this.opened}
                @toggle="${this.toggleEvent}"
              >
                <summary class="button-text">
                  ${this.seealltext(this.opened)}
                </summary>
                <div class="list-of-video">
                  <div class="number-of-videos">
                    ${this.numberofvideos} Videos
                  </div>
                  <div class="number-of-readings">
                    ${this.numberofreadings} Readings
                  </div>
                  <div class="number-of-quizzes">
                    ${this.numberofquizzes} Quiz
                  </div>
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
