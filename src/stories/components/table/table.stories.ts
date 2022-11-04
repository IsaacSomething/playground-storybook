import { Story, Meta } from '@storybook/angular';
import Table from './table.component';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Table> = (args: Table) => ({
  props: args,
});

export const Default = Template.bind({});
