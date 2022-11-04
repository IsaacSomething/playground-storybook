import { Story, Meta } from '@storybook/angular';
import Autocomplete from './autocomplete.component';

export default {
  title: 'Forms/Autocomplete',
  component: Autocomplete,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Autocomplete> = (args: Autocomplete) => ({
  props: args,
});

export const Default = Template.bind({});