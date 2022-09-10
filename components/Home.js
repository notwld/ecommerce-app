import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Categories from './Categories'
import Section from './Section'
import Crousal from './Crousal'
import Nav from './Nav'


export default function Home() {
    const [categories, setCategories] = useState([
        {
            id: 134,
            name: 'All',
            image: require('../assets/images/all.png'),
        },
        {
            id: 2324,
            name: 'Male',
            image: require('../assets/images/man.png'),
        },
        {
            id: 3324,
            name: 'Female',
            image: require('../assets/images/women.png'),
        },
        {
            id: 4342,
            name: 'Kids',
            image: require('../assets/images/kids.png'),
        },
        {
            id: 5342,
            name: 'Shoes',
            image: require('../assets/images/shoes.png'),
        },


    ])

    const [topRated, setTopRated] = useState([
        {
            "id": 96,
            "image": require("../assets/images/top4.jpeg"),
            "name": "Shirt",
            "price": 120,
        },
        {
            "id": 97,
            "image": require("../assets/images/top5.jpeg"),
            "name": "Shirt",
            "price": 120,
        },
        {
            "id": 98,
            "image": require("../assets/images/top6.jpeg"),
            "name": "Shirt",
            "price": 120,
        },
        {
            "id": 1,
            "image": require("../assets/images/top1.jpeg"),
            "name": "Shirt",
            "price": 120,
        },
        {
            "id": 2,
            "image": require("../assets/images/top2.jpeg"),
            "name": "Shirt",
            "price": 120,
        },
        {
            "id": 3,
            "image": require("../assets/images/top3.jpeg"),
            "name": "Shirt",
            "price": 120,
        },
    ])
    

    return (
        <View style={styles.homeScreen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                <Nav/>
                <View style={styles.homeScreenBody}>
                    <Text style={styles.heading}>
                        Find your style.
                    </Text>
                    <Categories categories={categories} />
                </View>

                <Crousal/>
                <Section section={'New Arrivals'} data={topRated} />
                <Section section={'Most Popular'} data={topRated} />
                <Section section={'Top Rated'} data={topRated} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        padding: 20,
        // marginBottom: 40,
    },
    
    homeScreenBody: {
        marginTop: 10,
        width: '100%',
    },
    heading: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
    },
    cPic: {
        width: 200,
        height: 300,
        marginRight: 25,
    },
   
})