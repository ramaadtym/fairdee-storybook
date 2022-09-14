import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from '../components/common/Badge';

export default {
  title: 'Fairdee UI/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <section>Put your content here</section>,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: <section>Put your content here</section>,
  variant: 'secondary'
}
