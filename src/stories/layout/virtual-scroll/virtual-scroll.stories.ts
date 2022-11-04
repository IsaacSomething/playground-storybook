import { Story, Meta } from '@storybook/angular';
import VirtualScroll from './virtual-scroll.component';

export default {
  title: 'Layout/Virtual Scroll',
  component: VirtualScroll,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<VirtualScroll> = (args: VirtualScroll) => ({
  props: args,
});

export const Default = Template.bind({});
Default.argTypes = { items: { control: { disable: true } } };
