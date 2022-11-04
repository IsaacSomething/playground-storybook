import { Story, Meta } from '@storybook/angular';
import Textarea from './textarea.component';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Textarea> = (args: Textarea) => ({
  props: args,
});

export const Default = Template.bind({});
