import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import TherapistCard from '../components/TherapistCard';
import {colors, sizes, fonts} from '../constants/theme';

const TherapistScreen = props => {
  const [query, setQuery] = useState('');
  const {data, category} = props.route.params;
  const onChangeSearch = query => setQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{category}</Text>
      </View>
      <View style={styles.searchContainer}>
        <Searchbar
          style={styles.search}
          placeholder="Search...."
          onChangeText={onChangeSearch}
          value={query}
        />
      </View>
      <ScrollView>
        {data.map(doc => {
          return (
            <View key={doc.id} style={styles.docContainer}>
              <TherapistCard data={doc} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TherapistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: colors.white,
    fontSize: fonts.h1.fontSize,
    fontWeight: '700',
  },
  searchContainer: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  search: {
    height: 38,
  },
  docContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
});
