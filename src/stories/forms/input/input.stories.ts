import { Story, Meta } from '@storybook/angular';
import InputFormField from './input.component';

export default {
  title: 'Forms/Input',
  component: InputFormField,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<InputFormField> = (args: InputFormField) => ({
  props: args,
});

export const Default = Template.bind({});
