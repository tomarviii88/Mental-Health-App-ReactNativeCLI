import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {colors} from '../constants/theme';

const IndividualFitnessContent = ({route}) => {
  const image = route.params.image;
  const title = route.params.category;

  return (
    <ImageZoom
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={Dimensions.get('window').width}
      imageHeight={Dimensions.get('window').height - 50}
      style={{marginTop: 10}}>
      <View>
        <Image
          resizeMode="center"
          style={{aspectRatio: 0.65, borderRadius: 20}}
          source={{uri: image}}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 17,
            backgroundColor: colors.accent,
            paddingVertical: 15,
          }}>
          {title}
        </Text>
      </View>
    </ImageZoom>
  );
};
export default IndividualFitnessContent;
