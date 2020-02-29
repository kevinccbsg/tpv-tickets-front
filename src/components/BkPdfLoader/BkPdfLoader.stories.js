import { storiesOf } from '@storybook/vue';

import BkPdfLoader from './BkPdfLoader.vue';

storiesOf('Components/BkPdfLoader', module)
  .add('default', () => ({
    components: { BkPdfLoader },
    template: `
        <BkPdfLoader
            title="Select a file"
            btnText="Send"
        />
        `,
  }));
