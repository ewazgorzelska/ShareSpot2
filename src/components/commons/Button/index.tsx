import { Button as MantineButton } from '@mantine/core';

interface IButtonProps {
  text: string;
  onClickHandler?: () => void;
}
const Button: React.FC<IButtonProps> = ({ text, onClickHandler }) => {
  return (
    <MantineButton
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
