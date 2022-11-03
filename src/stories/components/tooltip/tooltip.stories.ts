import { Story, Meta } from '@storybook/angular';
import Tooltip from './tooltip.component';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      options: ['after', 'before', 'above', 'below', 'left', 'right'],
      control: { type: 'radio' },
    },
    color: {
      options: ['default', 'primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    tooltipLabel: {
      control: { type: 'text', label: 'Label' },
    },
  },
} as Meta;

const Template: Story<Tooltip> = (args: Tooltip) => ({
  props: args,
});

export const Default = Template.bind({
  position: 'after',
});