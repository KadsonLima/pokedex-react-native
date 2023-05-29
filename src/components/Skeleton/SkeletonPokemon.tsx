import React from "react";
import { View, ActivityIndicator, StyleSheet, Image, Dimensions } from "react-native";

const Skeleton = () => {
  return <View style={styles.skeleton} />;
};

export const SkeletonPokemon = () => {
  return (
    <View style={styles.container}>
      <Image
    
        source={require('../../../assets/images/pokemon.png')}
        style={styles.skeleton}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const imageSize = width /4;


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:imageSize,
    height:imageSize,
    flexDirection:'column',
    justifyContent:'space-between',
    borderWidth: 1, 
    borderColor: '#3a3a3a73s', 
    borderRadius: 5,
    margin:5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 10,
    position:"relative"
  },
  skeleton: {
    position:"absolute",
    width:imageSize * 0.8,
    height:imageSize* 0.8,
    resizeMode: 'contain',
    alignSelf: 'center',
    bottom: '10%'
  },
});
