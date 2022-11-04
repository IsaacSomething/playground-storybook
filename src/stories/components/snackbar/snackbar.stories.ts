import { Story, Meta } from '@storybook/angular';
import Snackbar from './snackbar.component';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn', 'default'],
      control: { type: 'radio' },
    },
    duration: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Snackbar> = (args: Snackbar) => ({
  props: args,
});

export const Default = Template.bind({});
