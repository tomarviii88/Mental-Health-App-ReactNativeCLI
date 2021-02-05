import * as React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import TouchableScale from 'react-native-touchable-scale';
import {data, popular} from '../constants/BlogData';
import {colors} from '../constants/theme';
import OpenBlogScreen from './OpenBlogScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FAB} from 'react-native-paper';
import AddBlog from './AddBlog';

const MainScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.YourDailyRead}>
        <View>
          <Text style={styles.YourDailyReadText}>
            Your Daily Read <Text style={styles.verticalLine}>|</Text>
          </Text>
        </View>
      </View>

      {/* Header End */}

      {/* Your Daily Read */}

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          keyExtractor={item => item.id.toString()}
          style={{paddingHorizontal: 20}}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <TouchableScale
                    activeScale={0.9}
                    tension={50}
                    friction={7}
                    useNativeDriver
                    onPress={() =>
                      navigation.navigate('OpenBlogScreen', {data: item})
                    }>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={{
                          width: width - 100,
                          height: height - 500,
                          borderRadius: 14,
                          marginRight: 30,
                        }}
                        resizeMode="cover"
                      />
                    </View>

                    <View
                      style={{
                        width: width - 90,
                        position: 'absolute',
                        bottom: 90,
                        left: 10,
                        paddingHorizontal: 10,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 24,
                          fontWeight: 'bold',
                          lineHeight: 28,
                        }}>
                        {item.title}
                      </Text>
                    </View>

                    <View style={styles.profilePic2}>
                      <View>
                        <Image
                          source={{uri: item.profilePic}}
                          style={styles.profilePicStyle}
                          resizeMode="cover"
                        />
                      </View>

                      <View>
                        <View>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 16,
                              fontWeight: 'bold',
                            }}>
                            {item.author}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableScale>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* Your Daily Read End */}

      {/* POPULAR START */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: -5}}>
          Popular Stories <Text style={styles.verticalLine}>|</Text>
        </Text>
      </View>

      <FlatList
        data={popular}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableScale
                activeScale={0.9}
                tension={50}
                friction={7}
                useNativeDriver
                onPress={() =>
                  navigation.navigate('OpenBlogScreen', {data: item})
                }>
                <View style={styles.popularStories}>
                  <View style={{marginRight: 20}}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.BlogImage}
                    />
                  </View>

                  <View style={{width: '60%', marginTop: -10}}>
                    <Text></Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        marginBottom: 4,
                      }}>
                      {item.title}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        opacity: 0.4,
                      }}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View>
                          <Text style={{fontSize: 12}}>{item.author}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 40,
                          }}>
                          <Feather name="thumbs-up" size={14} color="#000" />
                          <Text style={{marginHorizontal: 4, fontSize: 12}}>
                            {item.likes} Likes
                          </Text>
                        </View>
                      </View>
                    </View>
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
const StoryScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OpenBlogScreen"
        component={OpenBlogScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add"
        component={AddBlog}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StoryScreenStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 0,
  },
  YourDailyRead: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  YourDailyReadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  profilePicStyle: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 14,
  },
  profilePic2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  popularStories: {
    flexDirection: 'row',
    paddingBottom: 30,
    paddingLeft: 30,
    alignItems: 'center',
    marginTop: 0,
  },
  BlogImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  verticalLine: {
    fontWeight: 'bold',
    color: colors.yellow,
    fontSize: 30,
    textShadowRadius: 4,
    textShadowColor: 'grey',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },
});
