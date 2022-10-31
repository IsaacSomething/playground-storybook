import { Story, Meta } from '@storybook/angular';
import Elevation from './elevation.component';

export default {
  title: 'Elevation',
  component: Elevation,
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
  },
} as Meta;

const Template: Story<Elevation> = (args: Elevation) => ({
  props: args,
});

export const Default = Template.bind({
  elevation: 1,
});
