import { mount } from '@vue/test-utils';
import BkButton from '@/components/BkButton/BkButton.vue';

describe('BkButton component', () => {
  it('Should be render correctly', () => {
    const wrapper = mount(BkButton);
    expect(wrapper.element).toMatchSnapshot();
  });
});
