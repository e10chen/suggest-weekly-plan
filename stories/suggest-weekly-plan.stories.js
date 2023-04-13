import { html } from 'lit';
import '../src/suggest-weekly-plan.js';

export default {
  title: 'SuggestWeeklyPlan',
  component: 'suggest-weekly-plan',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <suggest-weekly-plan
      style="--suggest-weekly-plan-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </suggest-weekly-plan>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
