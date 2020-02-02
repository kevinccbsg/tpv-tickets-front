import { configure } from '@storybook/vue';
import '@/components/registerAsGlobal';

configure(require.context('../src', true, /\.stories\.js$/), module);
