import { TouchableOpacity, View, Text } from 'react-native';
import moment from 'moment';
import { Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { ContentProps } from '../../constants/types';
import { getFavorite, removeFavorite, saveFavorite } from '../../services/storage';

interface Props {
  item: ContentProps;
}

export const CardContent = ({ item }: Props) => {
  const daysSinceLaunch = moment().diff(item.published_at, 'days');
  const launchTime = moment(item.published_at).format('h:mm A');
  const [fav, setFav] = useState(false);

  const handleFavorite = () => {
    if(fav){
      removeFavorite(item.id)
      .then((response)=>{
        setFav(false);
      })
    }
    else{
      saveFavorite(item.owner_username, item.slug, item.id)
      .then((response)=>{
        setFav(true);;
      })
    }
  }

  useEffect(()=>{
    getFavorite(item.owner_username,item.slug, item.id)
    .then((response)=>{
      if(response){
        setFav(response)
      }
    })
  })

  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 2,
        borderColor: '#f0f0f0',
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          paddingVertical: 8,
          gap: 5,
          width: 300,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: '#2e2624', fontSize: 20, fontWeight: 'bold' }}>
            @{item.owner_username}
          </Text>
          {daysSinceLaunch > 0 ? (
            <Text style={{ color: '#817c78' }}>
              {daysSinceLaunch} {daysSinceLaunch > 1 ? 'dias' : 'dia'} atrás
            </Text>
          ) : (
            <Text style={{ color: '#817c78' }}>{launchTime}</Text>
          )}
        </View>

        <View style={{}}>
          <Text
            style={{
              color: '#a29b98',
              fontSize: 18,
              fontWeight: '400',
            }}>
            {item.title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <Text style={{ color: '#2e2622' }}>{item.tabcoins} tabcoins </Text>
          <Text style={{ color: '#2e2622' }}>{item.children_deep_count} Comentarios </Text>
        </View>
      </View>
      <View>
        <Button
          icon="star"
          mode={fav ? 'contained' : 'contained-tonal'}
          onPress={() => {
            handleFavorite()
          }}>

          </Button>
      </View>
    </TouchableOpacity>
  );
};
