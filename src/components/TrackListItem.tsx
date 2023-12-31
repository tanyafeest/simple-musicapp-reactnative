import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Track } from '../types';
import { userPlayerContext } from '../providers/PlayerProvider';

type TrackListItem = {
  track: Track;
};

export default function TrackListItem({ track }: TrackListItem) {
  const { setTrack } = userPlayerContext();

  return (
    <Pressable onPress={() => setTrack(track)} style={styles.container}>
      <Image
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subTitle}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  subTitle: {
    color: 'gray',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});
