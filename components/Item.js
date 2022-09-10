import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useNavigation } from '@react-navigation/native'

const HEIGHT = 350

export default function Item(props) {
    const navigation = useNavigation();
    const item = props.route.params.item
    console.log(item)
  return (
    <View style={styles.container}>
     <TouchableOpacity 
     onPress={()=>{navigation.navigate("Home")}}
     style={{
        position: 'absolute',
        top: 22,
        left: 20,
      }}>
      <FontAwesomeIcon icon={faArrowLeft} size={26} color="black"  />
      </TouchableOpacity>
      <Image source={item.image} style={styles.img}></Image>
      <LinearGradient
        colors={['transparent', 'white', 'transparent']}
        style={{
          position: 'absolute',
          top: HEIGHT - 50,
          right: 0,
          width: '100%',
          height: 100,
        }}
      />
      <View style={styles.details}>
        <View style={
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }
        }>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>$<Text style={{color:"black"}}>{item.price}</Text></Text>
        </View>
        <View style={styles.reviews}>
          <View style={styles.reviewBox}>
            <FontAwesomeIcon icon={faStar} size={15} color="orange" style={{ marginRight: 7 }} />
            <Text style={{ fontSize: 15, color: 'orange' }}>4.5</Text>
            <Text style={{ marginLeft: 2, fontSize: 12, color: 'grey', fontWeight: 'bold' }}> (2.6k+ reviews)</Text>
            <FontAwesomeIcon icon={faGreaterThan} size={10} color="grey" style={{ marginLeft: 7 }} />
          </View>
        </View>
        <View style={styles.size}>
          <Text style={styles.sizeText}>Select Size</Text>
          <View style={styles.sizeBox}>
            <View style={styles.sizeSelect}><Text>S</Text></View>
            <View style={styles.sizeSelect}><Text>M</Text></View>
            <View style={styles.sizeSelect}><Text>L</Text></View>
            <View style={styles.sizeSelect}><Text>XL</Text></View>
          </View>

        </View>
        <View style={styles.color}>
          <Text style={styles.colorText}>Select Color</Text>
          <View style={styles.colorBox}>
            <View style={[styles.colorSelect, { backgroundColor: "red" }]}></View>
            <View style={[styles.colorSelect, { backgroundColor: "purple" }]}></View>
            <View style={[styles.colorSelect, { backgroundColor: "pink" }]}></View>
            <View style={[styles.colorSelect, { backgroundColor: "blue" }]}></View>
            <View style={[styles.colorSelect, { backgroundColor: "blue" }]}></View>
            <View style={[styles.colorSelect, { backgroundColor: "blue" }]}></View>
            <View style={[styles.colorSelect, { backgroundColor: "blue" }]}></View>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCart} activeOpacity={0.8}>
          <Text style={{ color: "white" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  img: {
    width: "100%",
    height: HEIGHT,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: HEIGHT - 20,
    width: '100%',
    padding: 20,
  },
  reviews: {
    marginTop: 0,
    marginBottom: 10
  },
  reviewText: {
    fontSize: 20,
    color: 'grey',
  },
  reviewBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: -10,
  },
  size: {
    display: 'flex',
    width: '100%',
    marginTop: 0,
  },
  sizeText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  sizeBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  sizeSelect: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 7,
    borderRadius: 8,
  },
  color: {
    display: 'flex',
    width: '100%',
    marginTop: 10,
  },
  colorText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  colorSelect: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 4,
    borderRadius: 8,
  },
  addToCart: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },



})