import { storiesOf } from '@storybook/vue';

import BkCollapse from './BkCollapse.vue';

storiesOf('Components/BkCollapse', module)
  .add('default', () => ({
    components: { BkCollapse },
    data() {
      return {
        isOpened: false,
      };
    },
    methods: {
      handleToggle() {
        this.isOpened = !this.isOpened;
      },
    },
    template: `
      <BkCollapse title="Here will be a title" :isOpened="isOpened">
        <div>
          <h2>Here will be the content</h2>
        </div>
      </BkCollapse>
        `,
  }));
