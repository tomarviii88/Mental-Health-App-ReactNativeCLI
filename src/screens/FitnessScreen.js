import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/theme';
import BrickList from 'react-native-masonry-brick-list';
import axios from 'axios';
import base64 from 'react-native-base64';
import AnimatedLoader from 'react-native-animated-loader';
import Grid from 'react-native-grid-component';
import FitnessCategoryCard from '../components/FitnessCategoryCard';
import {useNavigation} from '@react-navigation/native';

const FitnessScreen = () => {
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    'https://us-central1-mental-health-app-6edbd.cloudfunctions.net/app/api/fitness/categories',
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      //setIsLoading(true);
      try {
        const result = await axios(url);

        setCategories(result.data);
        setCategoryData(Object.keys(result.data));
        //console.log(result.data)
        //console.log(categoryData[0])
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);
  const _renderItem = (data, i) => (
    // <TouchableOpacity onPress={() => navigation.navigate('FitnessSubScreen',{category:data})}>
    <FitnessCategoryCard
      img_uri={categories[data].icon}
      category={data}></FitnessCategoryCard>
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
      ) : (
        <Grid
          style={styles.list}
          renderItem={_renderItem}
          //renderPlaceholder={this._renderPlaceholder}
          data={categoryData}
          numColumns={1}
          contentContainerStyle={styles.innerStyle}
          showsVerticalScrollIndicator={false}
          cardWidth={Dimensions.get('window').width}></Grid>
      )}
    </View>
  );
};

export default FitnessScreen;

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
