import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { colors } from '../constants/theme';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

const Login = props => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (state.email === '' || !re.test(String(state.email).toLowerCase())) {
      ToastAndroid.show('Email is invalid', ToastAndroid.SHORT);
      return;
    }

    if (state.password.length < 6) {
      ToastAndroid.show(
        'Password must contain 6 characters',
        ToastAndroid.SHORT
      );
      return;
    }

    props.login({ ...state });

    //console.log('after-register');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/yoga_main.jpg')}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').width
            }}
          />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.headerText}>Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Email'}
            value={state.email}
            onChangeText={text => {
              setState({
                ...state,
                email: text
              });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            value={state.password}
            onChangeText={text => {
              setState({
                ...state,
                password: text
              });
            }}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.already}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default connect(null, { login })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    backgroundColor: colors.white
  },
  signUpContainer: {
    backgroundColor: colors.white,
    flex: 1,
    position: 'relative',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: -10
  },
  textInput: {
    backgroundColor: colors.accent,
    margin: 10,
    height: 40,
    borderRadius: 30,
    elevation: 1,
    padding: 10,
    color: colors.black
  },
  radioButton: {
    flexDirection: 'row',
    paddingLeft: 20
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  submitButton: {
    alignSelf: 'center',
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    height: 40,
    borderRadius: 60
  },
  submitText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  },
  headerText: {
    color: colors.secondary,
    fontSize: 40,
    textTransform: 'uppercase',
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  already: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
    color: colors.secondary
  }
});
