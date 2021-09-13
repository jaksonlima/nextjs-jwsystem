import { Control, Controller, FieldErrors, RegisterOptions } from "react-hook-form"
import {
  FormControl,
  FormHelperText,
  Input as InputMUI,
  InputAdornment,
  InputBaseProps,
  InputLabel
} from "@material-ui/core"

interface InputProps extends InputBaseProps {
  control: Control
  errors?: FieldErrors
  icon?: JSX.Element
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  [props: string]: any
}

function Input({ control, rules, errors, icon, id, name, placeholder, error, color, ...props }: InputProps) {
  const messageError = errors?.[name]
  const hasMessageError: boolean = !!messageError || error
  const idOrName = id ?? name

  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel error={hasMessageError} color={color} htmlFor={idOrName}>{placeholder}</InputLabel>
      <Controller
        defaultValue=""
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
          <InputMUI
            {...field}
            {...props}
            id={idOrName}
            color={color}
            error={hasMessageError}
            endAdornment={!!icon && (
              <InputAdornment position="end">
                {icon}
              </InputAdornment>
            )}
          />
        }
      />
      {hasMessageError && (
        <FormHelperText error={hasMessageError} id={idOrName}>{messageError?.message || 'obrigatória'}</FormHelperText>
      )}
    </FormControl>
  )
}

export default Input