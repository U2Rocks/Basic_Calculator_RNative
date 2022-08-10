import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Main_Screen from './screens/Main_Screen';
import design from './src/constants/global';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main_Screen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: design.PRIMARY_COLOR,
  },
});
