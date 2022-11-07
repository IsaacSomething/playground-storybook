import { Story, Meta } from '@storybook/angular';
import InputFormField from './input.component';

export default {
  title: 'Forms/Input',
  component: InputFormField,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<InputFormField> = (args: InputFormField) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<InputFormField> | undefined = {
  label: '[label]',
  color: 'primary',
  appearance: 'fill',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
