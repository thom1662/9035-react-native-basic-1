import {
  SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Button,
  Pressable,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: 16,
          }}>


          <View style={
            {
              flexDirection: 'row',
              gap: 16,
            }
          }>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate('Home')}
            >
              <Text>Go to Home Page</Text>
            </Pressable>

            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate('List')}
            >
              <Text>Go to List Page</Text>
            </Pressable>

          </View>

          <Image
            source={require('../assets/efe-kurnaz-unsplash.jpg')}
            style={{
              width: 300,
              height: 400,
            }}
          />
          <Text>
            Lorem Ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
            qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    // paddingTop: 48,
  },
  btn: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 4,
    gap: 8,
  },
});
