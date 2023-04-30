import { LitElement, html, css } from "lit";
import "./week-card-box";
import "./videos-readings-quiz-list";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SuggestWeeklyPlan extends IntersectionObserverMixin(LitElement) {
  static get properties() {
    let inter = {};
    if (super.properties) {
      inter = super.properties;
    }
    return {
      ...inter,
      weekdescription: { type: Array },
      weeknumber: { type: Number },
    };
  }

  static styles = css`
    body {
      background-color: white;
    }
    .item {
      justify-content: left;
    }
  `;

  constructor() {
    super();
    this.weekdescription = [];
    this.weeknumber = 0;
    this.updateWeekDescription();
  }

  updateWeekDescription() {
    const address = new URL ("../api/weekdescription.js", import.meta.url).href;
    //const address = "../assets/weekdescription.json";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.weekdescription = data;
      });
  }

  weekNumber() {
    this.weeknumber += 1;
    return this.weeknumber;
  }

  render() {
    return html`
      ${this.elementVisible
        ? html`
            <div class="wrapper">
              ${this.weekdescription.map(
                (weekdescription) => html`
                  <div class="item">
                    <week-card-box
                      weeknumber=${this.weekNumber()}
                      timetocomplete="${weekdescription.timetocomplete}"
                      headline="${weekdescription.headline}"
                      description="${weekdescription.description}"
                      .items=${weekdescription}
                      .videos=${weekdescription.videos}
                      .readings=${weekdescription.readings}
                      .quizzes=${weekdescription.quizzes}
                    ></week-card-box>
                  </div>
                `
              )}
            </div>
          `
        : ``}
    `;
  }
}

customElements.define("suggest-weekly-plan", SuggestWeeklyPlan);
