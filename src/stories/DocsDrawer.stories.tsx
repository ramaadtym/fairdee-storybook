import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsDrawer from '../components/common/drawer/DocsDrawer';

export default {
  title: 'Drawer/Docs Drawer',
  component: DocsDrawer,
} as ComponentMeta<typeof DocsDrawer>;

const Template: ComponentStory<typeof DocsDrawer> = (args) => (
  <DocsDrawer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'This is Docs Drawer Header',
  docs: [
    {
      id: 1,
      file: {
        id: 11,
        original_file_name: 'Screenshot 2022-08-09 at 7.22.40 PM.png',
      },
    },
    {
      id: 2,
      file: {
        id: 21,
        original_file_name: 'Screenshot 2022-08-11 at 2.47.43 PM.png',
      },
    },
    {
      id: 3,
      file: {
        id: 31,
        original_file_name: 'Screenshot 2022-08-08 at 9.43.46 PM.png',
      },
    }
  ],
};
