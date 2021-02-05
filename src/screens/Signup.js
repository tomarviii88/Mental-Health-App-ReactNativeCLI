import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { colors } from '../constants/theme';
import { RadioButton } from 'react-native-paper';
import { register } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const Signup = props => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    fullName: '',
    email: '',
    age: null,
    gender: '',
    password: '',
    password2: ''
  });

  const handleSignUp = () => {
    if (state.fullName === '') {
      ToastAndroid.show('Full Name is required', ToastAndroid.SHORT);
      return;
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (state.email === '' || !re.test(String(state.email).toLowerCase())) {
      ToastAndroid.show('Email is invalid', ToastAndroid.SHORT);
      return;
    }

    if (
      state.age === null ||
      state.age === '' ||
      parseInt(state.age) <= 0 ||
      parseInt(state.age) >= 201
    ) {
      ToastAndroid.show('Age is invalid', ToastAndroid.SHORT);
      return;
    }

    if (state.gender === '') {
      ToastAndroid.show('Please select gender', ToastAndroid.SHORT);
      return;
    }

    if (state.password.length < 6) {
      ToastAndroid.show(
        'Password must contain 6 characters',
        ToastAndroid.SHORT
      );
      return;
    }

    if (state.password !== state.password2) {
      ToastAndroid.show('Password does not match', ToastAndroid.SHORT);
      return;
    }
    console.log('before-register');

    props.register({ name: state.fullName, ...state });

    //console.log('after-register');
  };
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/yoga_main.jpg')}
            style={{
              width: Dimensions.get('screen').width,
              height: 160
            }}
          />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.headerText}>Signup</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Full Name'}
            value={state.fullName}
            onChangeText={text =>
              setState({
                ...state,
                fullName: text
              })
            }
          />
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
            placeholder={'Age'}
            keyboardType='numeric'
            value={state.age}
            onChangeText={text => {
              setState({
                ...state,
                age: text
              });
            }}
          />
          <View style={styles.radioButton}>
            <View style={styles.radio}>
              <Text style={{ color: colors.secondary }}>Male</Text>
              <RadioButton
                value='male'
                color={colors.secondary}
                status={state.gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setState({
                    ...state,
                    gender: 'male'
                  });
                }}
              />
            </View>
            <View style={styles.radio}>
              <Text style={{ color: colors.secondary }}>Female</Text>
              <RadioButton
                value='female'
                color={colors.secondary}
                status={state.gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setState({
                    ...state,
                    gender: 'female'
                  });
                }}
              />
            </View>
            <View style={styles.radio}>
              <Text style={{ color: colors.secondary }}>Other</Text>
              <RadioButton
                color={colors.secondary}
                value='other'
                status={state.gender === 'other' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setState({
                    ...state,
                    gender: 'other'
                  });
                }}
              />
            </View>
          </View>
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
          <TextInput
            style={styles.textInput}
            placeholder={'Confirm Password'}
            value={state.password2}
            onChangeText={text => {
              setState({
                ...state,
                password2: text
              });
            }}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          >
            <Text style={styles.already}>Already have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => {
            //   ToastAndroid.show(
            //     'A pikachu appeared nearby !',
            //     ToastAndroid.SHORT
            //   );
            // }}
            onPress={handleSignUp}
          >
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>Signup</Text>
            </View>
          </TouchableOpacity>
          <View style={{ paddingBottom: Keyboard.height }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default connect(null, { register })(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    backgroundColor: colors.white,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signUpContainer: {
    backgroundColor: colors.white,
    flex: 2,
    display: 'flex',
    position: 'relative',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: -20,
    zIndex: 200,
    width: '100%'
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
    paddingLeft: 20,
    width: '100%'
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
