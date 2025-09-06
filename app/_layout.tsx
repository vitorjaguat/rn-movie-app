import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import './globals.css';

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar hidden /> */}
      <Stack>
        <StatusBar hidden={true} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='movies/[id]' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
