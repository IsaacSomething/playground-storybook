import { Story, Meta } from '@storybook/angular';
import DatePicker from './date-picker.component';

export default {
  title: 'Forms/Date Picker',
  component: DatePicker,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<DatePicker> = (args: DatePicker) => ({
  props: args,
});

export const Default = Template.bind({});
