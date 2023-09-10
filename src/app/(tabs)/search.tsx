import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { tracks } from '../../../assets/data/track';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
export default function SearchScreen() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header View */}
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor={'gray'}
        />

        <Text onPress={() => setSearch('')} style={{ color: 'gray' }}>
          Cancel
        </Text>
      </View>

      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#121314',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: '#fff',
  },
});
