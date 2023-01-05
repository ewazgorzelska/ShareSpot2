import { Button as MantineButton } from '@mantine/core';

export interface IButtonProps {
  text: string;
  onClickHandler?: () => void;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}
const Button: React.FC<IButtonProps> = ({
  text,
  type,
  onClickHandler,
  disabled = false,
}) => {
  return (
    <MantineButton
      type={type || 'button'}
      onClick={onClickHandler}
      disabled={disabled}
      styles={(theme) => ({
        root: {
          width: '150px',
          backgroundColor: theme.colors.brand[1],

          '&:hover': {
            backgroundColor: theme.fn.darken(theme.colors.brand[1], 0.5),
          },
        },
      })}
    >
      {text}
    </MantineButton>
  );
};

export default Button;
