import { BottomNavigation } from 'react-native-paper';
import * as React from 'react';
import { HomeScreen } from './HomeScreen';
import { Favorite } from './favoriteScreen';


export const Index = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'posts', title: 'Posts', focusedIcon: 'album' },
    { key: 'favorite', title: 'Favoritos', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'sittings', title: 'Difinicoes', focusedIcon: 'application-settings' },
    { key: 'users', title: 'Usuarios', focusedIcon: 'account-plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    favorite: Favorite,
    posts: HomeScreen,
    sittings: HomeScreen,
    users: HomeScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
