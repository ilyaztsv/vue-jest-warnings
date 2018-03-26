import { shallow } from '@vue/test-utils';
import MyComponent from './index';


describe('MyComponent', () => {
  let wrapper = shallow(MyComponent);

  it('created', () => {
    expect(wrapper).toBeTruthy();
  });

  it('snapshot', () => {
    wrapper = shallow(MyComponent, {
      propsData: {
        views: 555,
        comments: 777
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
