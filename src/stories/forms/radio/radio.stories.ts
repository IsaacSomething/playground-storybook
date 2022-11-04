import { Story, Meta } from '@storybook/angular';
import Radio from './radio.component';

export default {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Radio> = (args: Radio) => ({
  props: args,
});

export const Default = Template.bind({});
