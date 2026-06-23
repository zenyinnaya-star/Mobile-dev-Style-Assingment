import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContextProvider, useAppTheme } from '../hooks/theme-context'; // added, holds toggle state
import '../global.css';

function InnerLayout() {
  const { theme } = useAppTheme(); // added, reads theme from our own context now (not just phone)

  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack> 
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <InnerLayout />
    </ThemeContextProvider>
  );
}
