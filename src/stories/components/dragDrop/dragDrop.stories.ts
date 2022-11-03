import { Story, Meta } from '@storybook/angular';
import DragDrop from './dragDrop.component';

export default {
  title: 'Components/DragDrop',
  component: DragDrop,
} as Meta;

const Template: Story<DragDrop> = (args: DragDrop) => ({
  props: args,
});

export const Default = Template.bind({});
