import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Section({section,data}) {
    const navigation = useNavigation()
  return (
    <View style={styles.sectionScreen}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold',fontSize:20}}>{section}</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("SeeAll",
        {
            category:section,
            data:data
        })}>
            <Text style={{color:'orange',fontSize:12}}>See All</Text></TouchableOpacity>
      </View>
       <View style={{justifyContent:'center',alignItems:'center'}}>
       <FlatList
        data={data}
        keyExtractor={id => data.id}
        renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Item",{
                item : item
            })}>
            <Image source={item.image} style={styles.categoryImage} />
            </TouchableOpacity>
        )}
        numColumns={2}
    ></FlatList>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionScreen: {
        marginTop: 35,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',
        marginBottom:10
    },
    categoryImage: {
        width: 130,
        height: 200,
        margin:7
    }
})