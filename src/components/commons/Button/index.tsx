import { Button as MantineButton } from '@mantine/core';

interface IButtonProps {
  text: string;
  onClickHandler?: () => void;
  type: 'button' | 'reset' | 'submit';
}
const Button: React.FC<IButtonProps> = ({ text, type, onClickHandler }) => {
  return (
    <MantineButton
      type={type || 'button'}
      onClick={onClickHandler}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.secondary[0],
          width: '150px',

          '&:hover': {
            backgroundColor: theme.colors.primary[0],
          },
        },
      })}
    >
      {text}
    </MantineButton>
  );
};

export default Button;
