import { Story, Meta } from '@storybook/angular';
import DatePicker from './date-picker.component';

export default {
  title: 'Forms/Date Picker',
  component: DatePicker,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<DatePicker> = (args: DatePicker) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<DatePicker> | undefined = {
  color: 'primary',
  disabled: false,
  appearance: 'standard',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
