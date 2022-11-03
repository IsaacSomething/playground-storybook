import { Story, Meta } from '@storybook/angular';
import ButtonToggle from './button-toggle.component';
import Button from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    round: { control: { type: 'boolean' } },
  },
});

const urlPrefix =
  'https://www.figma.com/file/B4I9c9XojvfCuHyqlegRWg/material?node-id=';

const designParams = {
  type: 'figma',
  url: `${urlPrefix}?node-id=0%3A1`,
};
const disableTypes = {
  size: { control: { disable: true } },
  type: { control: { disable: true } },
};

/* Default */
export const Default = Template.bind({});
Default.args = { type: 'default' };
Default.parameters = {
  design: { ...designParams, url: `${urlPrefix}0%3A1` },
};
Default.argTypes = { ...disableTypes };

/* Flat */
export const Flat = Template.bind({});
Flat.args = { type: 'flat' };
Flat.parameters = {
  design: { ...designParams, url: `${urlPrefix}1%3A391` },
};
Flat.argTypes = { ...disableTypes };

/* Raised */
export const Raised = Template.bind({});
Raised.args = { type: 'raised' };
Raised.argTypes = { ...disableTypes };

/* Stroked */
export const Stroked = Template.bind({});
Stroked.args = { type: 'stroked' };
Stroked.argTypes = { ...disableTypes };

/* Button Toggle */
export const Toggle: Story<ButtonToggle> = (args: ButtonToggle) => ({
  component: ButtonToggle,
  props: args,
});