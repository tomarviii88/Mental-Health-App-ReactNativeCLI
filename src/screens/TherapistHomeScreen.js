import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import TherapistCard from '../components/TherapistCard';
import data from '../constants/doctors';
import {colors, sizes, fonts} from '../constants/theme';

const TherapistScreen = props => {
  const categories = [
    {
      id: '1',
      name: 'Psychologist',
      img: 'https://image.flaticon.com/icons/png/512/77/77306.png',
    },
    {
      id: '2',
      name: 'Psychiatrist',
      img:
        'https://icon-library.com/images/psychiatrist-icon/psychiatrist-icon-23.jpg',
    },
    {
      id: '3',
      name: 'Counsellor',
      img: 'https://static.thenounproject.com/png/1640081-200.png',
    },
    {
      id: '4',
      name: 'Social Worker',
      img: 'https://static.thenounproject.com/png/3216399-200.png',
    },
  ];
  const [query, setQuery] = useState('');
  const onChangeSearch = query => setQuery(query);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Therapist', {
            data: data.filter(data => data.specialisation == item.name),
            category: item.name,
          })
        }>
        <View style={styles.catBox}>
          <View style={{paddingVertical: 5}}>
            <Image style={styles.categoryImage} source={{uri: item.img}} />
          </View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Therapists</Text>
        <View style={styles.searchContainer}>
          <Searchbar
            style={styles.search}
            placeholder="Search...."
            onChangeText={onChangeSearch}
            value={query}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
          <Text style={styles.categoryText}>Categories</Text>
          <View
            style={{
              paddingHorizontal: 5,
              paddingVertical: 10,
              width: '100%',
              flexDirection: 'row',
            }}>
            <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
              style={{flex: 1}}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View>
          <Text style={{paddingHorizontal: 20, fontSize: fonts.h3.fontSize}}>
            Top Therapists
          </Text>
          <View style={{paddingBottom: 30}}>
            {data.map(doc => {
              return (
                <View key={doc.id} style={styles.docContainer}>
                  <TherapistCard data={doc} />
                </View>
              );
            })}
            {/* {
                    data.map(doc=>{
                    return <View key={doc.id} style={styles.docContainer}>
                        <TherapistCard data={doc} />
                    </View>
                    })
                } */}
          </View>
        </View>
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
    height: 150,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent:"space-around"
  },
  headerText: {
    color: 'white',
    fontSize: fonts.h1.fontSize,
    fontWeight: 'bold',
    position: 'relative',
    top: 20,
  },
  searchContainer: {
    position: 'relative',
    top: 40,
    width: '80%',
    height: 20,
  },
  search: {
    height: 38,
  },
  categoryImage: {
    width: 80,
    height: 80,
  },
  categoryText: {
    fontSize: fonts.h3.fontSize,
    paddingHorizontal: 10,
  },
  catBox: {
    borderWidth: 2,
    backgroundColor: colors.accent,
    borderColor: colors.gray3,
    borderRadius: 5,
    margin: 8,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  docContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
});
