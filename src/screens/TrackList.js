import React, {useEffect, Component, useState} from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import axios from 'axios';
import base64 from 'react-native-base64';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../constants/theme';

const TrackList = props => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    //console.log(props.route.params.id);
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          base64.encode(
            '85acc1ba7c3a4349b1abca61d53e2b26' +
              ':' +
              'ae1de5a2ad0c4ab4983f3d0a3b22ae68',
          ),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then(tokenResponse => {
      axios(
        `https://api.spotify.com/v1/playlists/${props.route.params.id}/tracks?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + tokenResponse.data.access_token,
          },
        },
      ).then(tracksResponse => {
        setTracks(tracksResponse.data.items);
      });
    });
    console.log(props.route.params.title);
  }, [props.route.params.id]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{props.route.params.title}</Text>
        {tracks.map(item => {
          return (
            item.track.preview_url && (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Track', {
                    audio: item.track.preview_url,
                    track: item.track.uri,
                    image: item.track.album.images[0].url,
                  });
                }}
                key={item.track.id}>
                <View style={styles.trackContainer}>
                  <Image
                    source={{uri: item.track.album.images[1].url}}
                    style={{width: 150, height: 150, borderRadius: 10}}
                  />
                </View>
              </TouchableOpacity>
            )
          );
        })}
        {/* <FlatList
          renderItem={renderItem}
          data={tracks}
          keyExtractor={item => item.track.id}
        /> */}
      </View>
    </ScrollView>
  );
};

export default TrackList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.gray2,
  },
  trackContainer: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    width: '100%',
    padding: 10,
    paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
  },
});
