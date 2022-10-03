import { Button as MantineButton } from '@mantine/core';

interface IButtonProps {
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
