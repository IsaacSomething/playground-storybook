import { Story, Meta } from '@storybook/angular';
import Toolbar from './toolbar.component';

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn', 'default'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const defaultArgs: Partial<Toolbar> | undefined = {
  leftLabel: '[Left]',
  rightLabel: '[Right]',
  color: 'default',
};

const Template: Story<Toolbar> = (args: Toolbar) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
