import { Appbar, Button } from 'react-native-paper';
import { View, Text }             from 'react-native';
import * as React         from 'react';
import { HeaderProps } from '../../constants/types';



export const HeaderBar = ({title}:HeaderProps) => {
  return (
    <View>
      <Appbar.Header
        style={{
          alignItems: 'center',
          paddingHorizontal: 15,
          backgroundColor: '#fff',
        }}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>
        </View>
        <View
          style={{
            left: 250,
          }}
        >
          <Button
            style={{ marginLeft: -10 }}
            buttonColor={'#2e2624s'}
            icon="square-edit-outline"
            mode="text"
            onPress={() => console.log('Pressed')}
          >
          </Button>
        </View>
      </Appbar.Header>
    </View>
  );
};
