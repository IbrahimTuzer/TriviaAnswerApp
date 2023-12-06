import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../redux/dataSlice';
import { CategoryButton, LoadingPage } from '../components';

const Home = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/previews/001/894/304/non_2x/man-avatar-thinking-with-question-marks-design-free-vector.jpg' }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Quiz Time</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            
            data={categories}
            numColumns={2}
            contentContainerStyle={{ alignItems: 'center' }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return <CategoryButton item={item} index={index} />;
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30,
    color: "black"
  },
  flatListContainer: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default Home;
