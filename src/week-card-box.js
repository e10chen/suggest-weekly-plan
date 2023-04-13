import { LitElement, html, css } from "lit";

class WeekCardBox extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .week-card {
      display: flex;
      height: 100px
      border: 1px solid black;
    }

    .week-number {
      width: 50%;
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


  `;

  constructor() {
    super();
    this.header = "My app";
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
        </div>
      </div>
    `;
  }
}

customElements.define("week-card-box", WeekCardBox);
