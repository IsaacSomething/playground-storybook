import { Story, Meta } from '@storybook/angular';
import Card from './card.component';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    isContained: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Card> = (args: Card) => ({
  props: args,
});

export const Default = Template.bind({});
