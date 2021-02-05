import React, {useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';

const Track = props => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    SoundPlayer.loadUrl(props.route.params.audio);
  }, []);
  const playSound = async () => {
    SoundPlayer.play();
    setPlay(!play);
  };
  const pauseSound = async () => {
    SoundPlayer.pause();
    setPlay(!play);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: props.route.params.image}}
          style={{width: 300, height: 300, borderRadius: 10}}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        {play ? (
          <TouchableOpacity onPress={pauseSound}>
            <FontAwesome name="pause" size={50} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={playSound}>
            <FontAwesome name="play" size={50} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Track;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.gray3,
  },
});
