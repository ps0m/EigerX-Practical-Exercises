import { TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, KeyboardEvent, memo } from 'react';

interface PropsInterface {
  value: string;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  handlerKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<PropsInterface> = memo(
  ({ value, changeValue, placeholder, handlerKeyPress }) => {
    return (
      <TextField
        label={<Typography variant="h5">{placeholder}</Typography>}
        variant="outlined"
        size="medium"
        value={value}
        onChange={changeValue}
        onKeyPress={handlerKeyPress}
        sx={{ flexGrow: 1 }}
        inputProps={{
          style: { fontSize: 16 },
        }}
      />
    );
  }
);
export default CustomInput;
