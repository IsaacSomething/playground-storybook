import { Story, Meta } from '@storybook/angular';
import Snackbar from './snackbar.component';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Snackbar> = (args: Snackbar) => ({
  props: args,
});

export const Default = Template.bind({});
