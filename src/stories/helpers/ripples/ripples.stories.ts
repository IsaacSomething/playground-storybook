import { Story, Meta } from '@storybook/angular';
import Ripples from './ripples.component';

export default {
  title: 'Helpers/Ripples',
  component: Ripples,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Ripples> = (args: Ripples) => ({
  props: args,
});

export const Default = Template.bind({});
