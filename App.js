import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click ME"
        onPress={() =>
          Alert.alert("confirm!", "Do you Want to Delete this", [
            { text: "yes", onPress: (text) => console.log("yes") },
            { text: "No", onPress: (text) => console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
