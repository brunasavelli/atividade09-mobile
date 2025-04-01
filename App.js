import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Cards from "./components/Cards"

export default function App() {
  return (
    <View style={styles.container}>
      <Header text="Livros Favoritos" />
      <Cards title="O Príncipe Cruel" description="Jude Duarte, uma mortal no Reino das Fadas, busca poder e respeito desafiando o cruel príncipe Cardan. Em meio a intrigas, ela luta para sobreviver e garantir o futuro de sua família na corte feérica." />
      <Cards title="Pássaro e Serpente" description="Lou, uma bruxa escondida, é forçada a se casar com Reid, um caçador de bruxas. Apesar da união forçada, sentimentos surgem, enquanto segredos e ameaças os unem na luta pela sobrevivência." />
      <Footer text="© 2025 Todos os direitos reservados." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F1F0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
