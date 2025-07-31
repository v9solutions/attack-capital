import { SafeAreaView, StyleSheet } from "react-native";
import WelcomeScreen from "./getstarted/";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
