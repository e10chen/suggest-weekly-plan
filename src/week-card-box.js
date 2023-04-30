import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./videos-readings-quiz-list";

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
    videos: { type: Array },
    readings: { type: Array },
    quizzes: { type: Array },
    items: { type: Object },
    objectiveIcon: { type: String },
    objectiveIconColor: { type: String },
    moduleObjectivesIcon: { type: String },
  };

  static styles = css`
   :host {
    font-size: 16px;
    font-weight: 100;
    font-family: "Source Sans Pro", sans-serif;
    --video-icon-background-color: linear-gradient( 0.25turn, #fb814e, #f6b343 );
    --objectives-icon-background-color: linear-gradient( 0.25turn, #45c9b4, #3bb3d5 );
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
      align-items: baseline;
    }



    details > summary {
      list-style: none;
      cursor: pointer;
    }

    .button-text {
      color: #0056d2;

    }

    .video {
      background: var(--video-icon-background-color);
    }

    .objectives {
      background: var(--objectives-icon-background-color);
    }


    .iconContainer {
      height: 25px;
      width: 25px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      padding: 5px;
      margin: 0px 5px 0px 0px;
      text-align: center;
    }


  `;

  constructor() {
    super();
    this.header = "My app";
    this.opened = false;
    this.weeknumber = 1;
    this.headline = "Something idk";
    this.description =
      "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.";
    this.opened = false;
    this.numberofvideos = 0;
    this.numberofreadings = 0;
    this.numberofquizzes = 0;
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
    this.objectiveIcon = "device:access-time";
    this.objectiveIconColor = "white";
    this.moduleObjectivesIcon = "av:library-books";
    this.totalminutecompletion = 0;
    this.timetocomplete = 0;
  }

  toggleEvent(e) {
    const state =
      this.shadowRoot.querySelector(".see-all-button").getAttribute("open") ===
      ""
        ? true
        : false;
    this.opened = state;
  }

  totalContent() {
    this.videos.map((video) => {
      this.totalminutecompletion += video.Duration;
      this.timetocomplete = this.totalminutecompletion;
      return this.totalminutecompletion;
    });
    this.readings.map((reading) => {
      this.timetocomplete += reading.Duration;
    });
    this.quizzes.map((quizzes) => {
      this.timetocomplete += quizzes.Duration;
    });
    this.numberofvideos = this.videos.length;
    this.numberofreadings = this.readings.length;
    this.numberofquizzes = this.quizzes.length;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "open") {
        this.dispatchEvent(
          new CustomEvent("opened-changed", {
            composed: true,
            bubbles: true,
            cancelable: false,
            detail: {
              value: this[propName],
            },
          })
        );
      }
      if (propName == "videos") {
        this.totalContent();
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
            <span class="iconContainer video">
              <simple-icon
                icon="${this.objectiveIcon}"
                style="--simple-icon-color:${this.objectiveIconColor};"
              ></simple-icon
            ></span>
            ${this.timetocomplete} mintues to complete
          </div>

          <div class="headline">${this.headline}</div>
          <div class="description">${this.description}</div>
          <div class="video-reading-quiz-see-all">
            <div class="video-reading-quiz-heading">
              <div class="video-reading-quiz-title">
                <span class="iconContainer objectives">
                  <simple-icon
                    style="--simple-icon-color:${this.objectiveIconColor}"
                    icon="${this.moduleObjectivesIcon}"
                  ></simple-icon
                ></span>
                ${this.numberofvideos} videos (Total
                ${this.totalminutecompletion} min) ${this.numberofreadings}
                reading, ${this.numberofquizzes} quiz
              </div>
            </div>
          </div>

          <details
            class="see-all-button"
            .open=${this.opened}
            @toggle="${this.toggleEvent}"
          >
            <summary class="button-text">
              ${this.seealltext(this.opened)}
            </summary>
            <videos-readings-quiz-list
              .videos=${this.items.videos}
              .readings=${this.items.readings}
              .quizzes=${this.items.quizzes}
            ></videos-readings-quiz-list>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define("week-card-box", WeekCardBox);
