import { FlatList } from 'react-native';

import { tracks } from '../../../assets/data/track';
import TrackListItem from '../../components/TrackListItem';

export default function FavoritesScreen() {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
