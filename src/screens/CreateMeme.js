import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CreateMeme = () => {
  const [loading, setLoading] = useState(true);
  const [memeArray, setMemeArray] = useState([]);
  const [meme, setMeme] = useState(null);
  const [randomIndex, setRandomIndex] = useState(0);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    axios
      .get('http://alpha-meme-maker.herokuapp.com/2')
      .then(res => {
        setMemeArray(res.data.data);
        console.log(res.data.data);
        setLoading(false);
        setMeme(res.data.data[0]);
        console.log(meme);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const generateRandomNumber = () => {
    const rand = Math.floor(Math.random() * memeArray.length);
    setRandomIndex(rand);
    console.log(rand);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator
            size={'large'}
            color={colors.primary}
            style={{marginTop: 10}}
          />
        )}
        {!loading && (
          <>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Meme Generator</Text>
              </View>
              <View style={styles.memeContainer}>
                <View style={styles.memeTextContainer}>
                  <Text style={styles.memeText}>{topText}</Text>
                  <Text style={styles.memeText}>{bottomText}</Text>
                </View>
                <Image
                  source={{uri: memeArray[randomIndex].image}}
                  style={{
                    width: Dimensions.get('screen').width - 100,
                    height: Dimensions.get('screen').width - 100,
                  }}
                />
                <TouchableOpacity
                  style={styles.generateAnother1}
                  onPress={generateRandomNumber}>
                  <View style={styles.generateAnother}>
                    <Text style={{color: colors.secondary}}>
                      Generate Another Image
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Top Text'}
                    value={topText}
                    onChangeText={text => {
                      setTopText(text);
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Bottom Text'}
                    value={bottomText}
                    onChangeText={text => {
                      setBottomText(text);
                    }}
                  />
                </View>
                <TouchableOpacity>
                  <View style={styles.postButton}>
                    <Text
                      style={{
                        color: colors.white,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: 1,
                      }}>
                      Post
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default CreateMeme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  memeContainer: {
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    width: Dimensions.get('screen').width - 100,
    backgroundColor: colors.gray3,
    height: 35,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
  textInputContainer: {
    paddingTop: 10,
  },
  postButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  generateAnother: {
    marginTop: 10,
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: colors.accent,
  },
  generateAnother1: {
    alignSelf: 'flex-end',
    width: Dimensions.get('screen').width - 20,
  },
  memeTextContainer: {
    width: Dimensions.get('screen').width - 100,
    height: Dimensions.get('screen').width - 100,
    position: 'absolute',
    zIndex: 100,
    marginTop: 10,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  memeText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: 20,
  },
});
