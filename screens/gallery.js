import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const batFamily = [
  {
    id: "1",
    name: "Robin (Tim Drake)",
    age: "13",
    desc: "Terceiro Robin, gênio investigativo e o mais estratégico da Batfamília.",
    img: require("../assets/galleryImg/robin.jpg"),
  },
  {
    id: "2",
    name: "Batgirl (Barbara Gordon)",
    age: "24",
    desc: "Filha do Comissário Gordon, uma das maiores aliadas do Batman.",
    img: require("../assets/galleryImg/barb.jpg"),
  },
  {
    id: "3",
    name: "Nightwing",
    age: "25",
    desc: "Identidade adulta de Dick Grayson, protetor de Blüdhaven.",
    img: require("../assets/galleryImg/dick.jpg"),
  },
  {
    id: "4",
    name: "Capuz Vermelho",
    age: "18",
    desc: "Ex-Robin ressuscitado, mais violento que o Batman, luta contra o crime de forma implacável.",
    img: require("../assets/galleryImg/hood.jpg"),
  },
];

export default function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bat-Família</Text>
      <FlatList
        data={batFamily}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.age}>Idade: {item.age}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 10,
  },
  title: {
    color: "#FFD700",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: "contain",
  },
  name: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
  age: {
    color: "#CCC",
    fontSize: 14,
    marginTop: 5,
  },
  desc: {
    color: "#AAA",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});
