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

export const Determinate = Template.bind({});
Determinate.args = {
  mode: 'determinate',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  mode: 'indeterminate',
};
