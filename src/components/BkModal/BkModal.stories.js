import { storiesOf } from '@storybook/vue';

import BkModal from './BkModal.vue';

storiesOf('Components/BkModal', module)
  .add('default', () => ({
    components: { BkModal },
    data() {
      return {
        showModal: false,
      };
    },
    template: `
        <div>
            <button id="show-modal" @click="showModal = true">Show Modal</button>
            <BkModal v-if="showModal" @close="showModal = false">
                <h3 slot="header">custom header</h3>
            </BkModal>
        </div>
        `,
  }));
