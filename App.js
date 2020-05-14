import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from firebase
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import key from './components/dev'

class App extends React.Component {
  componentDidMount(){
      const firebaseConfig = {
        apiKey: key.apiKey,
        authDomain: key.authDomain,
        databaseURL: key.databaseURL,
        projectId: key.projectId,
        storageBucket: key.storageBucket,
        messagingSenderId: key.messagingSenderId,
        appId: key.appId
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
