import { OutlinedInput, OutlinedInputProps } from '@mui/material';
import { styled } from '@mui/material/styles';
interface NumberInputProps extends OutlinedInputProps {
  type?: 'number';
}

const NumberInput = styled(
  ({ type, ...props }: NumberInputProps): JSX.Element => {
    return <OutlinedInput {...props} type={type || 'number'} />;
  },
)(
  ({ theme }) => `
  width: 100%;
  padding: ${theme.spacing(0, 0.8)};

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #fff;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.palette.primary.main};
  }

  & .MuiOutlinedInput-notchedOutline {
    transition: border-color 300ms ease-in;
    border-color: #353535;
  }

  & .MuiInputAdornment-root {
    margin: 0;
  }

  & .MuiOutlinedInput-input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;
    color: #fff;
    height: ${theme.typography.pxToRem(40)};
    font-size: ${theme.typography.pxToRem(12.5)};
    font-family: 'Fira Sans';
    font-weight: 400;
    min-width: ${theme.typography.pxToRem(12)};
    text-align: center;
    padding: 0;
    vertical-align: top;
  }
`,
);

export default NumberInput;
