import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default function SeeAll(props) {
    let data = props.route.params.data
    const category = props.route.params.category
    const navigation = useNavigation()
  return (
    <View style={styles.SeeAllScreen}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <FontAwesomeIcon
       icon={faAngleLeft} 
       style={{color:'black'}}
       size={30}
       ></FontAwesomeIcon>
      </TouchableOpacity>
      <Text style={{
            fontSize:35,
            fontWeight:'bold',
      }}>{category}</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={id => data.id}
        renderItem={({ item }) => (
            <Image source={item.image} style={styles.categoryImage} />
        )}
        numColumns={2}
        style={{flex:1}}
    ></FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    SeeAllScreen: {
        marginTop: 15,
        padding:20,
        flex:1,
    },
    header:{
        flexDirection:'column',
        marginBottom:10,
        marginTop:25
    },
    categoryImage: {
        width: 130,
        height: 200,
        margin:7
    }

})