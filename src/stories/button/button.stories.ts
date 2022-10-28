import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Button',
  component: Button,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    label: {},
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    type: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const Flat = Template.bind({});
Flat.args = {
  type: 'flat',
};

export const Raised = Template.bind({});
Raised.args = {
  type: 'raised',
};

export const Stroked = Template.bind({});
Stroked.args = {
  type: 'stroked',
};
