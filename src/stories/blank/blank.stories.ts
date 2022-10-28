import { Story, Meta } from '@storybook/angular';
import Blank from './blank.component';

export default {
  title: 'Blank',
  component: Blank,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    isContained: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Blank> = (args: Blank) => ({
  props: args,
});

export const Default = Template.bind({});
