import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  TextInput,
  RadioButton,
  HelperText,
  Checkbox,
  Button,
} from 'react-native-paper';
import {colors, sizes, fonts} from '../constants/theme';
// import { AntDesign,MaterialCommunityIcons,Feather,Entypo} from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {concerns} from '../constants/concerns';
import {updateUser} from '../redux/actions/profile';
import {connect} from 'react-redux';

const Profile = props => {
  const [checked, setChecked] = useState(props.auth.profile.gender);
  const [selectedConcerns, setSelectedConcerns] = useState(
    props.auth.profile.concerns,
  );
  const [fullname, setFullname] = useState(props.auth.profile.name);
  const [email, setEmail] = useState(props.auth.user.email);
  const [phone, setPhone] = useState(props.auth.profile.phone_no);
  const [age, setAge] = useState(props.auth.profile.age);

  const hasErrors = () => {
    return !email.includes('@');
  };

  const Gender = props => {
    return (
      <RadioButton
        value={props}
        color={colors.secondary}
        status={checked === props ? 'checked' : 'unchecked'}
        onPress={() => setChecked(props)}
      />
    );
  };

  const Problem = prob => {
    return (
      <View style={styles.checkbox}>
        <Text style={{width: '57%'}}>{prob.name}</Text>
        <Checkbox
          color={colors.primary}
          status={selectedConcerns.includes(prob.id) ? 'checked' : 'unchecked'}
          onPress={() => {
            if (selectedConcerns.includes(prob.id)) {
              setSelectedConcerns([
                ...selectedConcerns.filter(concern => concern !== prob.id),
              ]);
            } else {
              setSelectedConcerns([...selectedConcerns, prob.id]);
            }
          }}
        />
      </View>
    );
  };

  const submitHandler = () => {
    props.updateUser(
      fullname,
      email,
      phone,
      age,
      checked,
      selectedConcerns,
      props.auth.user._id,
    );
  };

  return (
    <ScrollView style={{backgroundColor: 'white', width: '100%'}}>
      <View style={styles.background}>
        <AntDesign
          name="arrowleft"
          size={32}
          color="white"
          style={{position: 'absolute', top: 25, left: 20}}
          onPress={() => props.navigation.navigate('Profile')}
        />
        <Text style={styles.profileText}>Edit Profile</Text>
        <View style={styles.dpCover}>
          <Image
            style={{width: 90, height: 90}}
            source={require('../../assets/userIcon.png')}
          />
        </View>
        <Entypo
          name="camera"
          size={24}
          color={colors.secondary}
          style={styles.camera}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.inputBox}>
          <AntDesign
            name="user"
            size={24}
            color={colors.secondary}
            style={{position: 'relative', left: 20}}
          />
          <TextInput
            style={styles.input}
            theme={{colors: {primary: colors.secondary}}}
            underlineColor={colors.secondary}
            selectionColor={colors.secondary}
            mode="flat"
            dense={true}
            label="Fullname"
            value={fullname}
            onChangeText={text => setFullname(text)}
          />
        </View>

        <View style={styles.inputBox}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={colors.secondary}
            style={{position: 'relative', left: 20}}
          />
          <TextInput
            style={styles.input}
            theme={{colors: {primary: colors.secondary}}}
            underlineColor={colors.secondary}
            selectionColor={colors.secondary}
            mode="flat"
            dense={true}
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        {/* <HelperText type="error" visible={hasErrors()}>
                    Email address is invalid!
                  </HelperText> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          <Text>Male: </Text>
          {Gender('male')}
          <Text>Female: </Text>
          {Gender('female')}
          <Text>Other: </Text>
          {Gender('other')}
        </View>
        <View style={styles.inputBox2}>
          <Feather
            name="phone"
            size={24}
            color={colors.secondary}
            style={{position: 'relative', left: 20}}
          />
          <TextInput
            style={{
              marginRight: 15,
              width: '45%',
              paddingLeft: 22,
              backgroundColor: 'transparent',
            }}
            theme={{colors: {primary: colors.secondary}}}
            underlineColor={colors.secondary}
            selectionColor={colors.secondary}
            mode="flat"
            dense={true}
            label="Phone no."
            value={phone}
            onChangeText={text => setPhone(text)}
            keyboardType="numeric"
          />
          <MaterialCommunityIcons
            name="timer-sand-empty"
            size={24}
            color={colors.secondary}
            style={{position: 'relative', left: 20}}
          />
          <TextInput
            style={{
              width: '30%',
              paddingLeft: 22,
              backgroundColor: 'transparent',
            }}
            theme={{colors: {primary: colors.secondary}}}
            underlineColor={colors.secondary}
            selectionColor={colors.secondary}
            mode="flat"
            dense={true}
            label="Age"
            value={age}
            onChangeText={text => setAge(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.problemText}>My Concerns: </Text>
          <View style={styles.problemsBox}>
            {concerns.map(prob => {
              return (
                <View key={prob.id} style={styles.problemsPart}>
                  {Problem(prob)}
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Button
            mode="contained"
            color="#face4b"
            style={{width: '60%', borderRadius: 20, marginTop: 20}}
            onPress={submitHandler}>
            <Text style={{color: colors.white}}>Save Changes</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {updateUser})(Profile);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    borderBottomEndRadius: 180,
    // borderBottomStartRadius:300,
    width: '100%',
    height: 150,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  profileText: {
    position: 'relative',
    top: 10,
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
  dpCover: {
    width: 100,
    height: 100,
    position: 'relative',
    // left:'35%',
    top: '20%',
    borderRadius: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  camera: {
    position: 'absolute',
    top: '105%',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginRight: 15,
    width: '90%',
    paddingLeft: 22,
    backgroundColor: 'transparent',
  },
  problemText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingBottom: 8,
    fontSize: fonts.title.fontSize,
    fontWeight: '600',
    color: colors.secondary,
    display: 'flex',
    textAlign: 'left',
  },
  problemsBox: {
    display: 'flex',
    marginLeft: 20,
    marginRight: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  problemsPart: {
    width: '50%',
  },
  checkbox: {
    width: '100%',
    // paddingLeft:15,
    paddingVertical: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
