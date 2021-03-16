import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import AppLoading from 'expo-app-loading';
import CustomButton from './components/CustomButton'

// import * as Font from 'expo-font';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import { LinearGradient } from 'expo-linear-gradient';

import { assets } from './assets/assets';
import { layout } from './styles/layout';
import { COLORS } from './styles/colors';
// import { FONT_FAMILY } from './styles/fonts';

export default function App() {

  const [doc,setDoc] = useState(null)

  return (
    <LinearGradient
        colors={[COLORS.plottrOrange, COLORS.white, COLORS.white]}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 1.0, x: 1.0 }}
        style={styles.container}
      >
      {doc && 
        <TouchableOpacity onPress={() => Sharing.shareAsync(doc.uri)} style={styles.docContainer}>
          <Image source={assets[0]}/>
          <Text style={styles.text}>Edit {doc && doc.name}</Text>
        </TouchableOpacity>
      }
      <CustomButton
        icon={assets[2]}
        label={'Open Documents'}
        isActive={true}
        onPress={async () => setDoc(await DocumentPicker.getDocumentAsync())}
        style={styles.openButton}
      />
      <View style={styles.assetContainer}>
        <Image source={assets[1]} style={styles.asset}/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  docContainer: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    height:100
  },
  text: {
    // fontFamily:FONT_FAMILY.MEDIUM,
    fontSize:16
  },
  assetContainer: {
    position:'absolute',
    top:0,
    zIndex:-1,
    width:layout.window.width
  },
  asset: {
    width:'100%',
    // height:undefined
  },
  openButton: {
    width:layout.window.width * 7/8,
    position:'absolute',
    bottom:40,
    zIndex:999
  }
});
