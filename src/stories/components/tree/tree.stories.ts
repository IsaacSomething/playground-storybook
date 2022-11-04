import { Story, Meta } from '@storybook/angular';
import Tree from './tree.component';

export default {
  title: 'Components/Tree',
  component: Tree,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Tree> = (args: Tree) => ({
  props: args,
});

export const Default = Template.bind({});
