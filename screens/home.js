import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Batman</Text>
      <Image
        source={require("../assets/homeImg/batman.jpg")}
        style={styles.image}
      />
      <Text style={styles.intro}>
        Conhecido como o Cavaleiro das Trevas, Bruce Wayne luta contra o crime em Gotham com inteligência, disciplina e coragem. Sempre nas sombras, ele inspira medo nos criminosos e esperança nos inocentes.
      </Text>
      <Text style={styles.quote}>
        "Eu sou a vingança. Eu sou a noite. Eu sou o Batman."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#FFD700",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 2,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: "cover",
    marginBottom: 25,

  },
  intro: {
    color: "#EEE",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  quote: {
    color: "#FFD700",
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
  },
});
