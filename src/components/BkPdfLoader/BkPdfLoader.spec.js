import { mount } from '@vue/test-utils';
import BkPdfLoader from '@/components/BkPdfLoader/BkPdfLoader.vue';

describe('BkPdfLoader component', () => {
  it('Should be render correctly', () => {
    const wrapper = mount(BkPdfLoader);
    expect(wrapper.element).toMatchSnapshot();
  });
});
