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
  },
} as Meta;

const Template: Story<Autocomplete> = (args: Autocomplete) => ({
  props: args,
});

const defaultArgs: Partial<Autocomplete> | undefined = {
  label: '[Autocomplete label]',
  color: 'primary',
  appearance: 'standard',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
