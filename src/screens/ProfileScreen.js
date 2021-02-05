import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {Chip} from 'react-native-paper';
//import { AntDesign,MaterialIcons,Feather,FontAwesome5,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors, sizes, fonts} from '../constants/theme';
import {concerns} from '../constants/concerns';
import pastData from '../constants/pastData';
import futureData from '../constants/futureData';
import Appointments from '../components/Appointments';
import {connect} from 'react-redux';

const ProfileScreen = props => {
  // const user=useSelector((state)=>state.user)
  const [selectedConcerns, setSelectedConcerns] = useState(
    props.auth.profile.concerns,
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.top}>
          <AntDesign
            name="arrowleft"
            size={32}
            color={colors.white}
            onPress={() => props.navigation.navigate('Home')}
          />
          <Text style={styles.profileText}>Profile</Text>
          <FontAwesome5
            name="edit"
            size={24}
            color={colors.white}
            onPress={() => props.navigation.navigate('EditProfile')}
          />
        </View>
        <View style={styles.dpCover}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../assets/userIcon.png')}
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{props.auth.profile.name}</Text>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="gender-male-female"
            size={20}
            color={colors.tertiary}
          />
          <Text style={styles.otherInfo}>{props.auth.profile.gender}</Text>
        </View>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="timer-sand-empty"
            size={20}
            color={colors.tertiary}
          />
          <Text style={styles.otherInfo}>
            {props.auth.profile.age} yrs. old
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Feather name="phone" size={20} color={colors.tertiary} />
          <Text style={styles.otherInfo}>{props.auth.profile.phone_no}</Text>
        </View>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color={colors.tertiary}
          />
          <Text style={styles.otherInfo}>{props.auth.user.email}</Text>
        </View>
      </View>
      <View style={styles.concernContainer}>
        <Text style={styles.concernTitle}>My Concerns:</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {concerns.map(chip => {
            return (
              <Chip
                key={chip.id}
                icon={
                  selectedConcerns.includes(chip.id)
                    ? 'check-circle-outline'
                    : 'close-circle-outline'
                }
                disabled={selectedConcerns.includes(chip.id) ? false : true}
                style={styles.chip}>
                {chip.name}
              </Chip>
            );
          })}
        </View>
      </View>
      <View style={{position: 'relative', top: 60}}>
        <Appointments data={futureData} type="Future" />
      </View>
      <View style={{position: 'relative', top: 60, marginBottom: 70}}>
        <Appointments data={pastData} type="Past" />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  background: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    //   borderBottomEndRadius:100
  },
  top: {
    padding: 20,
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileText: {
    position: 'relative',
    color: colors.white,
    fontSize: fonts.h1.fontSize,
    fontWeight: '700',
  },
  dpCover: {
    width: 110,
    height: 110,
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    borderRadius: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  info: {
    position: 'relative',
    top: 55,
    display: 'flex',
    alignItems: 'center',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    paddingBottom: 5,
    fontSize: fonts.title.fontSize,
    fontWeight: 'bold',
    color: 'black',
  },
  otherInfo: {
    paddingBottom: 5,
    paddingLeft: 5,
    // fontStyle:'italic'
  },
  concernContainer: {
    margin: 10,
    paddingBottom: 10,
    position: 'relative',
    top: 70,
    borderTopWidth: 2,
    borderTopColor: colors.accent,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
  concernTitle: {
    textAlign: 'center',
    padding: 10,
    fontSize: fonts.title.fontSize,
    color: colors.secondary,
  },
  chip: {
    margin: 5,
    backgroundColor: colors.accent,
  },
});
