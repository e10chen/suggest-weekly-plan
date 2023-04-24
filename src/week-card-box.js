import { LitElement, html, css } from "lit";
import "./video-list-title";

class WeekCardBox extends LitElement {
  static properties = {
    header: { type: String },
    opened: {
      type: Boolean,
      reflect: true,
    },
    weeknumber: { type: String },
    timetocomplete: { type: String },
    headline: { type: String },
    description: { type: String },
    videoreadingquiztitle: { type: String },
    textseeall: { type: String },
    videolisttitle: { type: Array },
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


  `;

  constructor() {
    super();
    this.header = "My app";
    this.opened = false;
    this.weeknumber = "1";
    this.timetocomplete = "4 hours to complete";
    this.headline = "Something idk";
    this.description =
      "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.";
    this.videoreadingquiztitle = "9 videos (Total 55 min). 3 reading, 1 quiz";
    this.opened = false;
    this.videolisttitle = [];
    this.updateVideoTitle();
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

  updateVideoTitle() {
    //const address = "../api/video";
    const address = "../assets/video.json";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.videolisttitle = data;
      });
  }

  render() {
    return html`
      <div class="week-card">
        <div class="week-number">
          <div class="week-text">Week</div>
          <div class="number">${this.weeknumber}</div>
        </div>

        <div class="syllabus-module">
          <div class="time-to-complete">${this.timetocomplete}</div>
          <div class="headline">${this.headline}</div>
          <div class="description">${this.description}</div>
          <div class="video-reading-quiz-see-all">
            <div class="video-reading-quiz-heading">
              <div class="video-reading-quiz-title">
                ${this.videoreadingquiztitle}
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
                <div class="wrapper">
                  ${this.videolisttitle.map(
                    (videolisttitle) => html`
                      <div class="item">
                        <video-list-title
                          videoicon="${videolisttitle.videoicon}"
                          videotitle="${videolisttitle.videotitle}"
                        ></video-list-title>
                      </div>
                    `
                  )}
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
