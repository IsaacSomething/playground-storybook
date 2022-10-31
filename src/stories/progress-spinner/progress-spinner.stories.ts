import { Story, Meta } from '@storybook/angular/types-6-0';
import ProgressComponent from './progress-spinner.component';

export default {
  title: 'Progress',
  component: ProgressComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    label: {},
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  props: args,
});

export const Bar = Template.bind({});
Bar.args = {
  mode: 'determinate',
};

export const Spinner = Template.bind({});
Spinner.args = {
  mode: 'indeterminate',
};
