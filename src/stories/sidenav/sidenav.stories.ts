import { Story, Meta } from '@storybook/angular';
import Sidenav from './sidenav.component';

export default {
  title: 'Sidenav',
  component: Sidenav,
  argTypes: {
    mode: {
      options: ['over', 'push', 'side'],
      control: { type: 'radio' },
    },
    position: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
    closedStart: { action: 'Sidenav closed start' },
    openedStart: { action: 'Sidenav opened start' },
    openedChange: { action: 'Sidenav opened changed' },
    onPositionChanged: { action: 'Sidenav position changed' },
  },
} as Meta;

const SidenavContainer: Story<Sidenav> = (args: Sidenav) => ({
  props: args,
});
export const Container = SidenavContainer.bind({});
