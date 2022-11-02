import { Story, Meta } from '@storybook/angular';
import Button from './button.component';
import ButtonIcon from './button-icon.component';

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
    type: { disable: true },
  },
});

const urlPrefix =
  'https://www.figma.com/file/B4I9c9XojvfCuHyqlegRWg/material?node-id=';

const designParams = {
  type: 'figma',
  url: `${urlPrefix}?node-id=0%3A1`,
};

export const Default = Template.bind({});
Default.args = { type: 'default' };
Default.parameters = {
  design: { ...designParams, url: `${urlPrefix}0%3A1` },
};

export const Flat = Template.bind({});
Flat.args = { type: 'flat' };
Flat.parameters = {
  design: { ...designParams, url: `${urlPrefix}1%3A391` },
};

export const Raised = Template.bind({});
Raised.args = { type: 'raised' };

export const Stroked = Template.bind({});
Stroked.args = { type: 'stroked' };

export const Icon: Story<ButtonIcon> = (args: ButtonIcon) => ({
  component: ButtonIcon,
  props: args,
});
