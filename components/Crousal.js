import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const images = [
  require("../assets/images/top1.jpeg"),
  require("../assets/images/top2.jpeg"),
  require("../assets/images/top3.jpeg"),
  require("../assets/images/top4.jpeg"),
  require("../assets/images/top5.jpeg"),
  require("../assets/images/top6.jpeg"),
];


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CONTAINER_WIDTH = width * 0.7;
const CONTAINER_SPACE = (width - CONTAINER_WIDTH) / 2;
const SPACE = 7;
const HEIGHT_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: HEIGHT_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {images.map((imagen, index) => {
        const inputRange = [
          (index - 1) * CONTAINER_WIDTH,
          index * CONTAINER_WIDTH,
          (index + 1) * CONTAINER_WIDTH,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={imagen}
            style={[
              { width: width, height: HEIGHT_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: HEIGHT_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {/* <Backdrop scrollX={scrollX} /> */}
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="center"
        contentContainerStyle={{
          paddingTop: 75,
          paddingHorizontal: CONTAINER_SPACE,
        }}
        snapToInterval={CONTAINER_WIDTH}
        decelerationRate={0}
        scrollEventThrottle={14}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * CONTAINER_WIDTH,
            index * CONTAINER_WIDTH ,
            (index + 1) * CONTAINER_WIDTH,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{ width: CONTAINER_WIDTH }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACE,
                  padding: SPACE ,
                  paddingRight: SPACE + 110,
                  paddingLeft: SPACE ,
                  borderRadius: 34,
                  // backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ translateY: scrollY}],
                }}
              >
                <Image source={item} style={styles.posterImage} />
                
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    justifyContent: "center",
    
  },
  posterImage: {
    width: CONTAINER_WIDTH - SPACE * 2,
    height: CONTAINER_WIDTH * 1.5,
    resizeMode: "contain",
    borderRadius: 15,
    margin: 0,
    marginBottom: 8,
  },
});