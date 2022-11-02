import { Story, Meta } from '@storybook/angular';
import FormFieldInput from './input.component';

export default {
  title: 'Forms/Fields/input',
  component: FormFieldInput,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<FormFieldInput> = (args: FormFieldInput) => ({
  props: args,
});

export const Default = Template.bind({});

export const Flat = Template.bind({});

export const Raised = Template.bind({});

export const Stroked = Template.bind({});
