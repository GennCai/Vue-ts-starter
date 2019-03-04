import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ComponentB from '@/components/ComponentB.vue';

describe('ComponentB.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ComponentB, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
