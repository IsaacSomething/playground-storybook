import { Story, Meta } from '@storybook/angular';
import Helpers from './helpers.component';

export default {
  title: 'Helpers',
  component: Helpers,
  argTypes: {
    padding: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
    },
    paddingLeft: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
    },
    paddingRight: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
    },
    margin: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
    },
    marginLeft: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
    },
    marginRight: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
    },
  },
} as Meta;

const Template: Story<Helpers> = (args: Helpers) => ({
  props: args,
});

export const Default = Template.bind({
  padding: 0,
  margin: 0,
});
