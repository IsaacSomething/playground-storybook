import { Story, Meta } from '@storybook/angular';
import Button from './button.component';
import ButtonIcon from './button-icon.component';
import ButtonLoading from './button-loading.component';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    type: { table: { disable: true } },
  },
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

export const Icon: Story<ButtonIcon> = (args: ButtonIcon) => ({
  component: ButtonIcon,
  props: args,
});

export const Loading: Story<ButtonLoading> = (args: ButtonLoading) => ({
  component: ButtonLoading,
  props: args,
});
