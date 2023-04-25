import { LitElement, html, css } from "lit";
import "./week-card-box";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

class SuggestWeeklyPlan extends IntersectionObserverMixin(LitElement) {
  static get properties() {
    let inter = {};
    if (super.properties) {
      inter = super.properties;
    }
    return {
      ...inter,
      weekdescription: { type: Array },
    };
  }

  static styles = css`
    .item {
      justify-content: left;
    }
  `;

  constructor() {
    super();
    this.weekdescription = [];
    this.updateWeekDescription();
  }

  updateWeekDescription() {
    //const address = "../api/weekdescription";
    const address = "../assets/weekdescription.json";
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

  render() {
    return html`
    ${this.elementVisible ? html`
      <div class="wrapper">
        ${this.weekdescription.map(
          (weekdescription) => html`
            <div class="item">
              <week-card-box
                weeknumber="${weekdescription.weeknumber}"
                timetocomplete="${weekdescription.timetocomplete}"
                headline="${weekdescription.headline}"
                description="${weekdescription.description}"
                numberofvideos="${weekdescription.numberofvideos}";
                numberofreadings ="${weekdescription.numberofreadings}";
                numberofquizzes ="${weekdescription.numberofquizzes}";
                totalminutecompletion ="${weekdescription.totalminutecompletion}";
              ></week-card-box>
            </div>
          `
        )}
      </div>
    `:``}
    `
  }
}

customElements.define("suggest-weekly-plan", SuggestWeeklyPlan);
