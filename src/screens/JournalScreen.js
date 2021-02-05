import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import TouchableScale from 'react-native-touchable-scale';
import {colors} from '../constants/theme';
import {FloatingAction} from 'react-native-floating-action';
import {data} from '../constants/JournalsData';
import {ScrollView} from 'react-native-gesture-handler';
import AddJournal from './AddJournal';
import {FAB} from 'react-native-paper';
import DisplayJournal from './DisplayJournal';

const JournalScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <View style={{display: 'flex', flex: 1}}>
      <View style={styles.header}>
        <View style={styles.dpCover}>
          <Image
            style={{width: 70, height: 70, left: 4}}
            source={require('../../assets/userIcon.png')}
          />
          <View style={{flexDirection: 'column', left: 15, width: 160}}>
            <Text style={{fontSize: 25}}>Hi there!</Text>
            <Text style={{fontSize: 18, marginTop: 5}}>
              {date} {monthArray[month - 1]} {year}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableScale
                activeScale={0.9}
                tension={50}
                friction={7}
                useNativeDriver
                onPress={() => navigation.navigate('Display', {data: item})}>
                <View style={styles.popularStories}>
                  <View
                    style={{display: 'flex', width: '100%', marginTop: -10}}>
                    <View
                      style={{
                        borderBottomColor: colors.yellow,
                        borderBottomWidth: 1.5,
                        width: 200,
                        height: 70,
                      }}>
                      <Text style={styles.datestyle}>{item.date}</Text>
                      <Text style={styles.timestyle}>{item.time}</Text>
                    </View>
                    <Text style={styles.contentstyle} numberOfLines={2}>
                      {item.content}
                    </Text>
                  </View>
                </View>
              </TouchableScale>
            </View>
          );
        }}
      />
      <FAB
        medium
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('Add')}
        color={colors.white}
        backgroundColor={colors.yellow}
      />
    </View>
  );
};

const Stack = createStackNavigator();
const JournalScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Add"
        component={AddJournal}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Display"
        component={DisplayJournal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default JournalScreenStack;

const styles = StyleSheet.create({
  dpCover: {
    width: 80,
    height: 80,
    position: 'relative',
    top: 10,
    left: 15,
    borderRadius: 62,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  popularStories: {
    flexDirection: 'row',
    display: 'flex',
    paddingBottom: 30,

    alignItems: 'center',
    marginTop: 20,

    marginLeft: 10,
    borderColor: colors.accent,
    borderRadius: 10,
    borderWidth: 1,
    width: '93%',
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: colors.accent,
    zIndex: 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.yellow,
  },
  header: {
    display: 'flex',
    backgroundColor: colors.yellow,
    borderBottomRightRadius: 50,
    width: 360,
    height: 100,
  },
  contentstyle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: -20,
    marginTop: 15,
  },
  datestyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
    color: colors.secondary,
  },
  timestyle: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 0,
    marginTop: 0,
    color: colors.secondary,
  },
});
