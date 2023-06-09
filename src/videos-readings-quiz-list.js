import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class VideoReadingsQuizList extends LitElement {
  static properties = {
    videos: { type: Array },
    readings: { type: Array },
    exercises: { type: Array },
    numberofvideos: { type: Number },
    numberofreadings: { type: Number },
    numberofquizzes: { type: Number },
    totalminutecompletion: { type: Number },
    timetocomplete: { type: Number },
  };

  static styles = css`
    .list-of-content {
      display: flex;
      flex-direction: column;
      border-top: 1px solid black;
      justify-content: space-between;
    }
    .number-of-videos,
    .number-of-readings,
    .number-of-quizzes {
      display: flex;
      flex-direction: column;
    }
    .content-item {
      padding: 8px;
      display: flex;
      flex-direction: row;
    }
    .content-divider {
      border-bottom: 1px solid black;
    }

    .content-padding {
      padding: 10px;
    }

    .icons{
      display: inline-block;
    }

    .content-margin {
      display: inline-block;
      margin: 0px 16px 0px 16px;
    }

    .content-title {
      flex: 1;
    }
  `;

  constructor() {
    super();
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
    this.numberofvideos = 0;
    this.numberofreadings = 0;
    this.numberofquizzes = 0;
  }

  totalContent() {
    this.numberofvideos = this.videos.length;
    this.numberofreadings = this.readings.length;
    this.numberofquizzes = this.quizzes.length;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      this.totalContent();
    });
  }

  render() {
    return html` <div class="list-of-content">
      <div class="number-of-videos content-padding content-divider">
        <div class="total-videos content-padding">
          <simple-icon class = "icons"
            style="--simple-icon-color: blue"
            icon="av:play-circle-outline"
          ></simple-icon>
          <div class="video-text content-margin">
            ${this.numberofvideos} videos
          </div>
        </div>
        ${this.videos.map(
          (video) => html`
            <div class="content-item">
              <div class="content-title">${video.Title}</div>
              <div class="duration">${video.Duration} minutes</div>
            </div>
          `
        )}
      </div>
      <div class="number-of-readings content-padding content-divider">
        <div class="total-reading content-padding">
          <simple-icon class = "icons"
            style="--simple-icon-color: green"
            icon="communication:import-contacts"
          ></simple-icon>
          <div class="reading-text content-margin">
            ${this.numberofreadings} readings
          </div>
        </div>
        ${this.readings.map(
          (reading) => html`
            <div class="content-item">
              <div class="content-title">${reading.Title}</div>
              <div class="duration">${reading.Duration} minutes</div>
            </div>
          `
        )}
      </div>
      <div class="number-of-quizzes content-padding">
        <div class="total-quizzes content-padding">
          <simple-icon class = "icons"
            style="--simple-icon-color: blue"
            icon="av:library-books"
          ></simple-icon>
          <div class="quizzes-text content-margin">
            ${this.numberofquizzes} quizzes
          </div>
        </div>
        ${this.quizzes.map(
          (quizzes) => html`
            <div class="content-item">
              <div class="content-title">${quizzes.Title}</div>
              <div class="duration">${quizzes.Duration} minutes</div>
            </div>
          `
        )}
      </div>
    </div>`;
  }
}

customElements.define("videos-readings-quiz-list", VideoReadingsQuizList);
