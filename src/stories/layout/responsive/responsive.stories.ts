import { Story, Meta } from '@storybook/angular';
import Responsive from './responsive.component';

export default {
  title: 'Layout/Responsive',
  component: Responsive,
} as Meta;

const Template: Story<Responsive> = (args: Responsive) => ({
  props: args,
});

export const Default = Template.bind({});
