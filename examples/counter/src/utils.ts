import { createUseStyles, Styles, DefaultTheme } from 'react-jss';

export function styles<Theme = DefaultTheme, C extends string = string>(
  styles: Styles<C> | ((theme: Theme) => Styles<C>),
  options?: Parameters<typeof createUseStyles>[1]
) {
  return {
    useStyles: createUseStyles(styles, options as any)
  };
}
