import { Story, Meta } from '@storybook/angular';
import Slider from './slider.component';

export default {
  title: 'Forms/Slider',
  component: Slider,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Slider> = (args: Slider) => ({
  props: args,
});

export const Default = Template.bind({});
