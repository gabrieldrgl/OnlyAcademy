import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { handleIntegrationMP } from './src/utils/MPIntegration';
import { openBrowserAsync } from "expo-web-browser";

export default function App() {
  const handleBuy = async () => {
    const data = await handleIntegrationMP()

    openBrowserAsync(data)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBuy}><Text>teste</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
