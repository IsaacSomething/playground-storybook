import { Story, Meta } from '@storybook/angular/types-6-0';
import Theme from './theme.component';

export default {
  title: 'Theme',
  component: Theme,
  parameters: { controls: { sort: 'requiredFirst' } },
  color: { table: { disable: true } },
} as Meta;

const Template: Story<Theme> = (args: Theme) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Accent = Template.bind({});
Accent.args = {
  color: 'accent',
};
export const Warn = Template.bind({});
Warn.args = {
  color: 'warn',
};
