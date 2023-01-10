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
      styles={{
        root: {
          width: '150px',
          backgroundColor: 'var(--mantine-color-brand-1)',

          '&:hover': {
            filter: 'drop-shadow(3px 3px 3px rgba(0,0,0,0.3))',
          },
        },
      }}
    >
      {text}
    </MantineButton>
  );
};

export default Button;
