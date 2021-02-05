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

const FitnessCategoryCard = ({img_uri, category}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FitnessSubScreen', {category: category})
      }>
      <ImageOverlay
        overlayAlpha={0.35}
        source={{uri: img_uri.toString()}}
        title={category}
        titleStyle={styles.category}
      />
    </TouchableOpacity>
  );
};

export default FitnessCategoryCard;

const styles = StyleSheet.create({
  category: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
