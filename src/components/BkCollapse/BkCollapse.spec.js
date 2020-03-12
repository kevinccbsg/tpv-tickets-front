import { mount } from '@vue/test-utils';
import BkCollapse from '@/components/BkCollapse/BkCollapse.vue';

describe('BkCollapse component', () => {
  it('Should be render correctly', () => {
    const wrapper = mount(BkCollapse);
    expect(wrapper.element).toMatchSnapshot();
  });
});
