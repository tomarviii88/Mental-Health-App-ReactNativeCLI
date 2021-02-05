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

const FitnessSubScreenCard = ({img_uri, subcategory, category}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FitnessContent', {
          category: category,
          subcategory: subcategory,
        })
      }>
      <ImageOverlay
        containerStyle={styles.img}
        overlayAlpha={0.35}
        source={{uri: img_uri.toString()}}
        title={subcategory}
        titleStyle={styles.category}
        contentPosition={'bottom'}
      />
    </TouchableOpacity>
  );
};

export default FitnessSubScreenCard;

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
    paddingHorizontal: 2,
    width: '100%',
  },
});
