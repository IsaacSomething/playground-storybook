import { Story, Meta } from '@storybook/angular';
import Textarea from './textarea.component';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Textarea> = (args: Textarea) => ({
  props: args,
  argTypes: {
    color: {
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<Textarea> | undefined = {
  color: 'primary',
  disabled: false,
  appearance: 'standard',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
