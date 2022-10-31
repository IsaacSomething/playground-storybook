import { Story, Meta } from '@storybook/angular';
import SlideToggle from './slide-toggle.component';

export default {
  title: 'Slide Toggle',
  component: SlideToggle,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    isContained: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<SlideToggle> = (args: SlideToggle) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isContained: false,
};

export const Contained = Template.bind({});
Contained.args = {
  isContained: true,
};
