import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            facilis at suscipit est explicabo officiis consectetur
            exercitationem quod amet accusamus. Illo hic neque repudiandae, quo
            vitae temporibus facilis sapiente expedita. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ducimus recusandae aperiam animi
            nesciunt earum aliquid blanditiis possimus quaerat consectetur
            vitae.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/n4ryn')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 160,
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
