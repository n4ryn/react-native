import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>more...</Text>
        </View>
      </ScrollView>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    marginEnd: 14,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
  },
  cardText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
