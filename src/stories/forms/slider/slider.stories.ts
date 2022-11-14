import { Story, Meta } from '@storybook/angular';
import Slider from './slider.component';

export default {
  title: 'Forms/Slider',
  component: Slider,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Slider> = (args: Slider) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    step: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
    tickInterval: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<Slider> | undefined = {
  color: 'primary',
  disabled: false,
  vertical: false,
  thumbLabel: false,
  tickInterval: 0,
  step: 1,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
