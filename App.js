import React from 'react'
import RNFS from 'react-native-fs'
import {WebView, SafeAreaView} from 'react-native'

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <WebView source={{ uri: RNFS.DocumentDirectoryPath + '/public/index.html' }} style={{ flex: 1 }} decelerationRate={'normal'} />
  </SafeAreaView>
)