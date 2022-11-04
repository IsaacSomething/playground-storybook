import { Story, Meta } from '@storybook/angular';
import Select from './select.component';

export default {
  title: 'Forms/Select',
  component: Select,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Select> = (args: Select) => ({
  props: args,
});

export const Default = Template.bind({});
