import { Story, Meta } from '@storybook/angular';
import Select from './select.component';

export default {
  title: 'Forms/Select',
  component: Select,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Select> = (args: Select) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<Select> | undefined = {
  color: 'primary',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };