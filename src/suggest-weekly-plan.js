import { LitElement, html, css } from "lit";
import "./week-card-box";

class SuggestWeeklyPlan extends LitElement {
  static get properties() {
    return {
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
    `;
  }
}

customElements.define("suggest-weekly-plan", SuggestWeeklyPlan);
