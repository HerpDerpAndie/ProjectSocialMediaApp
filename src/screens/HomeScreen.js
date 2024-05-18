import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { data } from '../../data/Data'
import { Icon } from 'react-native-elements'


const HomeScreen = () => {
  const [modifiedData, setModifiedData] = useState([])
  
  const likePhoto = (likeStatus) => {
    const likeStatusChanged = modifiedData.map((item) => {
      item.likeStatus = !likeStatus;
      return item;
    });
    setModifiedData(likeStatusChanged);
  }

  useEffect(() => {
    const newData = data.map((item) => {
      item.likeStatus = false
      return item
    })

    setModifiedData(newData)
  }, [])


  return (
    <View>
      <FlatList
        data={modifiedData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainContainer}>
              <View style={styles.topContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{ uri: item.profilePicture }}
                />
                <View style={styles.normalMarginLeft}>
                  <Text style={styles.text}>
                    {item.username}
                  </Text>
                </View>
              </View>
              <Image
                style={styles.image}
                source={{ uri: item.imageLink }}
              />
              <View style={styles.captionContainer}>
                <Text style={styles.text}>
                  <Text style={styles.caption}>
                    {item.caption}
                  </Text>
                </Text>
              </View>
              <View style={styles.bottomContainer}>
                <TouchableOpacity
                  style={styles.horizontalContainer}
                  onPress={() => likePhoto(item.likeStatus, item.id)}
                >
                  <Icon name={
                    item.likeStatus ? 
                    'heart' : 'heart-o'
                  }
                    type='font-awesome' size={20}
                    color={item.likeStatus ? 'red' : 'grey'}
                  />
                  <View style={styles.normalMarginLeft}>
                    <Text style={styles.text}>
                      {
                        item.likeStatus ?
                          "Unlike" : "Like"
                      }
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.horizontalContainer}>
                  <Icon name='comments-o'
                    type='font-awesome' size={20}
                  />
                  <View style={styles.normalMarginLeft}>
                    <Text style={styles.text}>Comment</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View >
  )

}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 8
  },
  mainContainer: {
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  normalMarginLeft: {
    paddingLeft: 8
  },
  image: {
    width: "100%",
    height: 300
  },
  captionContainer: {
    margin: 8,
    flex: 1,
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
    color: "black"
  },
  caption: {
    fontWeight: "normal",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default HomeScreen