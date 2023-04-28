import { LitElement, html, css } from "lit";

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
    .content-title {
      flex: 1;
    }
  `;

  constructor() {
    super();
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
  }

  totalContent() {
    this.numberofvideos = this.videos.length;
    this.numberofreadings = this.readings.length;
    this.numberofquizzes = this.quizzes.length;
  }

  render() {
    return html` <div class="list-of-content">
      <div class="number-of-videos content-divider">
        ${this.videos.map(
          (video) => html`
            <div class="content-item">
              <div class="content-title">${video.Title}</div>
              <div class="duration">${video.Duration} minutes</div>
            </div>
          `
        )}
      </div>
      <div class="number-of-readings content-divider">
        ${this.readings.map(
          (reading) => html`
            <div class="content-item">
              <div class="content-title">${reading.Title}</div>
              <div class="duration">${reading.Duration} minutes</div>
            </div>
          `
        )}
      </div>
      <div class="number-of-quizzes content-divider">
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