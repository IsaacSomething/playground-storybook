import { Story, Meta } from '@storybook/angular';
import Dialog from './dialog.component';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Dialog> = (args: Dialog) => ({
  props: args,
});
export const Default = Template.bind({});
