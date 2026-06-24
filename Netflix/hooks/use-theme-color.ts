/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
<<<<<<< HEAD
import { useAppTheme } from '@/hooks/theme-context'; // changed, now reads from our toggle context
=======
import { useColorScheme } from '@/hooks/use-color-scheme';
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
<<<<<<< HEAD
  const { theme } = useAppTheme(); // changed from useColorScheme() to useAppTheme()
=======
  const theme = useColorScheme() ?? 'light';
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
