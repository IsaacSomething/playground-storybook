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
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<Slider> | undefined = {
  color: 'primary',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
