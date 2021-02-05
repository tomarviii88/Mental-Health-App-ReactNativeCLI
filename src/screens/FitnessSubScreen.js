import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {colors} from '../constants/theme';
import axios from 'axios';
import base64 from 'react-native-base64';
import AnimatedLoader from 'react-native-animated-loader';
import Grid from 'react-native-grid-component';
import FitnessSubScreenCard from '../components/FitnessSubScreenCard';

const FitnessSubScreen = ({route}) => {
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    'https://us-central1-mental-health-app-6edbd.cloudfunctions.net/app/api/fitness/' +
      route.params.category,
  );
  // const navigation = useNavigation('');

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      //setIsLoading(true);
      try {
        const result = await axios(url);

        setContent(result.data);
        setTitle(Object.keys(result.data));
        console.log(result.data);
        //console.log(categoryData[0])
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);
  const _renderItem = (data, i) => (
    <FitnessSubScreenCard
      img_uri={content[data]['icon']}
      subcategory={data}
      category={route.params.category}></FitnessSubScreenCard>
  );
  return (
    <View style={styles.container}>
      {isLoading ? (
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../constants/loader.json')}
          animationStyle={styles.lottie}
          speed={2}
        />
      ) : title.length > 0 ? (
        <Grid
          style={styles.list}
          renderItem={_renderItem}
          //renderPlaceholder={this._renderPlaceholder}
          data={title}
          numColumns={1}
          contentContainerStyle={styles.innerStyle}
          showsVerticalScrollIndicator={false}
          cardWidth={Dimensions.get('window').width}
          numColumns={2}></Grid>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/no-data.jpg')}
            style={{width: 200, height: 200}}></Image>
          <Text style={{paddingHorizontal: 5}}>
            Uh ohh! We are hard at curating the most useful data for you.{' '}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FitnessSubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1,
  },
  list: {
    flex: 1,
    marginTop: 40,
  },
  innerStyle: {
    justifyContent: 'space-between',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
