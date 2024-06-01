import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { handleIntegrationMP } from './src/utils/MPIntegration';
import { openBrowserAsync } from "expo-web-browser";

export default function App() {
  const handleBuy = async (title, description, price) => {
    const data = await handleIntegrationMP(title, description, price);

    openBrowserAsync(data);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleBuy("Plano Gratuito", "Acesso gratuito ao aplicativo", 0)}>
        <Text style={styles.buttonText}>Plano Gratuito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleBuy("Plano Mensal", "Assinatura mensal", 10)}>
        <Text style={styles.buttonText}>Plano Mensal - $10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleBuy("Plano Anual", "Assinatura anual", 100)}>
        <Text style={styles.buttonText}>Plano Anual - $100</Text>
      </TouchableOpacity>

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
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});