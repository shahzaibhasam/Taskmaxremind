import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
   <MainStack/>

    </Provider>
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
