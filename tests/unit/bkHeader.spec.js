import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BkHeader from '@/components/BkHeader.vue';

describe('BkHeader component', () => {
  it('renders props.title when passed', () => {
    const title = 'New title';
    const wrapper = shallowMount(BkHeader, {
      propsData: { title },
    });
    expect(wrapper.text()).to.include(title);
  });
});
