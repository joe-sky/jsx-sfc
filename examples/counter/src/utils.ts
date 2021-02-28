import { createUseStyles, Styles } from 'react-jss';

export function styles<C extends string>(arg: Styles<C>) {
  return {
    useStyles: createUseStyles(arg)
  };
}
