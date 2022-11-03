import { Story, Meta } from '@storybook/angular';
import Tabs from './tabs.component';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn', 'none'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Tabs> = (args: Tabs) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
        <mat-tab-group>
          <mat-tab label="First"> Content 1 </mat-tab>
          <mat-tab label="Second"> Content 2 </mat-tab>
          <mat-tab label="Third"> Content 3 </mat-tab>
        </mat-tab-group>
      `,
      language: 'html',
    },
  },
};
