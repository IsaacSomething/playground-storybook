import { Story, Meta } from '@storybook/angular';
import Menu from './menu.component';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Menu> = (args: Menu) => ({
  props: args,
});

export const Default = Template.bind({});
