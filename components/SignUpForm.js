import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL =
  'https://us-central1-one-time-password-6de67.cloudfunctions.net';

class SignUpForm extends Component {
  state = {
    phone: '',
  };

  handleSubmit = async () => {
    // try and catch let you know if there is a error
    try {
      // First I create the user
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });

      // Then the callback function will send a code message
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <View>
        <Input
          label={'Enter Phone Number'}
          onChangeText={(value) => this.setState({ phone: value })}
        />
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
