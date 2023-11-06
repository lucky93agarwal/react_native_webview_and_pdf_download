/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import WebView from 'react-native-webview';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';



const App = () => {

  console.log("downloadUrl Lucky");
  return (
    <WebView source={{ uri: "https://myaccountnew-uat.hdfclife.com/portal/config/auth/v1/validateToken?source=CS_APP&token=77b3247e-5fb9-430a-b013-ecc4fcd70ea4" }}
      javaScriptEnabled={true}
      startInLoadingState={true}
      allowUniversalAccessFromFileURLs={true}
      mixedContentMode={'always'}
      domStorageEnabled={true}
      allowFileAccess={true}
      allowingReadAccessToURL={true}
      onNavigationStateChange={(result) => {
        console.log("downloadUrl result");
        console.log(result);
      }}
      onFileDownload={({ nativeEvent: { nativeEvent } }) => {
        console.log("downloadUrl uri");
        console.log(nativeEvent);
        const { downloadUrl } = nativeEvent;
        console.log(downloadUrl);
      }} />
  )
};
const styles = StyleSheet.create({
  highlight: {
    height: 50,
    alignContent: "center",
    alignSelf: "center",
  },
  vertical: {
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  verticalSpace: {
    height: 50
  },
  sublight: {
    fontWeight: '600',
    marginTop: 15,
    fontSize: 35,
    color: "black",
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 20,

    color: "white",
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "white",
    marginTop: 30,
    padding: 12,
    alignItems: "center",
    width: "90%",
    borderRadius: 5
  },
  textButton: {
    color: "#222222",
    fontWeight: "600",
    fontSize: 15,
  },
  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen,
    marginVertical: 10,
    alignItems: 'center',
  },
  footContainer: {
    width: "100%",
  },
});

export default App;