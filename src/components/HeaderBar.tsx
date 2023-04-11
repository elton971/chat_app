import { Appbar, Button, Drawer } from 'react-native-paper';
import { View, Text }             from 'react-native';
import { Avatar }         from 'react-native-paper';
import * as React         from 'react';
import { useReducer }   from "react";
import { reducerHome }  from "../../store/reducer/reducer";
import { initialState } from "../../store/state/state";

interface HeaderBarProps {
  name: string;
}
export const HeaderBar = () => {
  const [state] = useReducer(reducerHome, initialState);
  const { header,user_data } = state;
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
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{header}</Text>
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
