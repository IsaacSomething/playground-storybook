import { Story, Meta } from '@storybook/angular';
import CardExpansion from './card-expansion.component';
import Card from './card.component';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    color: {
      options: ['default', 'primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Card> = (args: Card) => ({
  props: args,
});

export const Default = Template.bind({
  color: 'default',
});
export const WithImage = Template.bind({
  color: 'default',
});
export const Horizontal = Template.bind({
  color: 'default',
});

export const Expansion: Story<CardExpansion> = (args: CardExpansion) => ({
  component: CardExpansion,
  props: args,
  color: 'default',
});

export const Drawer = Template.bind({
  color: 'default',
});
