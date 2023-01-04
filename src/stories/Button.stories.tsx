import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { IButtonProps } from '../components/commons/Button/Button';

export default {
  title: 'commons/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate: ComponentStory<typeof Button> = (args: IButtonProps) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({} as IButtonProps);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  disabled: false,
  text: 'Log in',
};
