import { storiesOf } from '@storybook/vue';


import BkInput from './BkInput.vue';


storiesOf('Components/BkInput', module)
  .add('Username example', () => ({
    components: { BkInput },
    template: `
      <div style="background: lightgrey; padding: 20px">
        <BkInput v-model="value" type="text" name="input" label="User" color="primary"/>
        <div>
          <p>Value: {{ value }}</p>
        </div>
      </div>
        `,
    data() {
      return {
        value: '',
      };
    },
  }))
  .add('Input with secundary color', () => ({
    components: { BkInput },
    data() {
      return {
        value: '',
      };
    },
    template: `
    <div>
      <BkInput v-model="value" type="text" name="input" label="User" color="secundary" />
      <div>
        <p>Value: {{ value }}</p>
      </div>
    </div>

    `,
  }));
