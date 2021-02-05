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
import BrickList from 'react-native-masonry-brick-list';
import axios from 'axios';
import base64 from 'react-native-base64';
import AnimatedLoader from 'react-native-animated-loader';
import Grid from 'react-native-grid-component';
import FitnessContentCard from '../components/FitnessContentCard';

function convertToArray(content, title) {
  var contentlist = [];
  for (var i = 0; i < title.length; i++) {
    contentlist.push({uri: content[title[i]], heading: title[i]});
  }
  console.log('first' + contentlist[0][heading]);
  return contentlist;
}

const FitnessContent = ({route}) => {
  const [content, setContent] = useState({});
  const [title, setTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [contentList, setList] = useState([]);
  const [url, setUrl] = useState(
    'https://us-central1-mental-health-app-6edbd.cloudfunctions.net/app/api/fitness/' +
      route.params.category +
      '/' +
      route.params.subcategory +
      '/getContent',
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setContent(result.data);
        setTitle(Object.keys(result.data));
        // setList(convertToArray(content,title))
        //console.log(contentList[0][heading])
        //console.log(title[1])

        //   setContent(result.data);
        //   setTitle(Object.keys(result.data))
        //   console.log(result.data)
        //console.log(categoryData[0])
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);
  const _renderItem = (data, index) => (
    <FitnessContentCard
      img_uri={content[data]}
      category={data}></FitnessContentCard>
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
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}></Grid>
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

export default FitnessContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    flex: 1,
    marginTop: 40,
    alignContent: 'space-between',
  },

  lottie: {
    width: 200,
    height: 200,
  },
});
