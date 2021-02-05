import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {colors, sizes, fonts} from '../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {Button} from 'react-native-paper';

const TherapistProfileScreen = ({route, navigation}) => {
  const {therapist} = route.params;
  var starsCount = [];

  for (var i = 0; i < 5; i++) {
    if (i < therapist.stars) starsCount.push(true);
    else starsCount.push(false);
  }

  const stars = (count, index) => {
    return count ? (
      <AntDesign key={index} name="star" size={15} color="#f0de59" />
    ) : (
      <AntDesign key={index} name="star" size={15} color={colors.gray} />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <AntDesign
          name="arrowleft"
          size={32}
          color="white"
          style={{position: 'absolute', top: 25, left: 20}}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.profileText}>Therapist Profile</Text>
        <View style={styles.dpCover}>
          <Image
            style={{width: 100, height: 100, borderRadius: 62}}
            source={{uri: therapist.img}}
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{therapist.name}</Text>
        <Text style={styles.spec}>{therapist.specialisation}</Text>
        <View style={styles.starsBox}>
          {starsCount.map((item, index) => {
            return stars(item, index);
          })}
        </View>
      </View>
      <View style={styles.info2}>
        <View style={styles.partContainer}>
          <Text style={styles.partText}>Timing</Text>
          <Text style={styles.part}>{therapist.timing}</Text>
        </View>
        <View style={styles.partContainer}>
          <Text style={styles.partText}>Fee</Text>
          <Text style={styles.part}>{therapist.fee}</Text>
        </View>
      </View>
      <View style={styles.info3}>
        <Text style={styles.aboutText}>About Therapist</Text>
        <Text style={styles.about}>{therapist.bio}</Text>
      </View>
      <View style={styles.info4}>
        <View style={styles.contactBox}>
          <Text style={styles.contact}>{therapist.email}</Text>
          <MaterialCommunityIcons
            name="email"
            size={24}
            color={colors.primary}
          />
        </View>
        <View style={styles.contactBox}>
          <Text style={styles.contact}>{therapist.contact_no}</Text>
          <MaterialCommunityIcons
            name="phone"
            size={24}
            color={colors.primary}
          />
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
          style={{width: '90%', borderRadius: 10, marginTop: 20}}
          onPress={() => console.log('Pressed')}>
          <Text style={{color: colors.white}}>BOOK AN APPOINTMENT</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default TherapistProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
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
    width: 110,
    height: 110,
    position: 'relative',
    // left:'35%',
    top: '25%',
    borderRadius: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  info: {
    width: '100%',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    paddingBottom: 2,
    fontSize: fonts.title.fontSize,
    fontWeight: 'bold',
    color: 'black',
  },
  spec: {
    paddingBottom: 5,
    fontStyle: 'italic',
  },
  starsBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  info2: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.gray3,
    backgroundColor: colors.lightGrey,
  },
  partContainer: {
    width: '50%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray3,
  },
  partText: {
    paddingBottom: 5,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  info3: {
    marginHorizontal: 15,
  },
  aboutText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.tertiary,
    fontWeight: '700',
    fontSize: fonts.header.fontSize,
  },
  about: {
    textAlign: 'center',
    fontSize: fonts.body.fontSize,
  },
  info4: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  contactBox: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.accent,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
