import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors, sizes, fonts} from '../constants/theme';
import ImageOverlay from 'react-native-image-overlay';
import {useNavigation} from '@react-navigation/native';

const FitnessContentCard = ({img_uri, category}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('IndividualFitnessContent', {
          category: category,
          image: img_uri,
        })
      }>
      <ImageOverlay
        containerStyle={styles.img}
        overlayAlpha={0.35}
        source={{uri: img_uri.toString()}}
        title={category}
        titleStyle={styles.category}
      />
    </TouchableOpacity>
  );
};

export default FitnessContentCard;

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    marginVertical: 7,
    aspectRatio: 0.6,
    marginEnd: 5,
  },
  category: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
