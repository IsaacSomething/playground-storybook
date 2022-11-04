import { Story, Meta } from '@storybook/angular';
import Checkbox from './checkbox.component';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Checkbox> = (args: Checkbox) => ({
  props: args,
});

export const Default = Template.bind({});
