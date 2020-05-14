import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL =
  'https://us-central1-one-time-password-6de67.cloudfunctions.net';

class SignInForm extends Component {
  state = {
    code: '',
    phone: '',
  };

  handleSubmit = async () => {
    const { phone, code } = this.state;
    try {
      // We can destructure response.data who contain the Token
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: phone,
        code: code,
      });
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <View>
        <Text h2>Signin</Text>
        <Input
          label={'Enter Phone Number'}
          onChangeText={(value) => this.setState({ phone: value })}
        />
        <Input
          label={'EnterCode'}
          onChangeText={(value) => this.setState({ code: value })}
        />
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
