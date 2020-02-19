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
      <BkCollapse :isOpened="isOpened">
        <template #header>
                <div>
                    <p>Collapse</p>
                    <i class="material-icons">
                    <button @click="handleToggle"></button>
                </div>
            </template>

        <template #body>
            <h2>Aqui va el contenido</h2>
        </template>
      </BkCollapse>
        `,
  }));
