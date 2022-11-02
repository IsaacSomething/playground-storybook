import { Story, Meta } from '@storybook/angular';
import Checkbox from './checkbox.component';

export default {
  title: 'Forms/Fields/checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Checkbox> = (args: Checkbox) => ({
  props: args,
});

export const Default = Template.bind({});

export const Flat = Template.bind({});

export const Raised = Template.bind({});

export const Stroked = Template.bind({});
