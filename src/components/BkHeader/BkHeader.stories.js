import { storiesOf } from '@storybook/vue';

import BkHeader from './BkHeader.vue';

storiesOf('Components/BkHeader', module)
  .add('default', () => ({
    components: { BkHeader },
    template: `
        <BkHeader title="Title of a section"/>
        `,
  }));
