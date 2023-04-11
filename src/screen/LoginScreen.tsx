import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

// @ts-ignore
import img from '../../assets/Rectangle8.png';

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: 190,
        }}
      >
        <Image
          style={{
            flex: 1,
            width: '100%',
            height: 10,
            backgroundColor: '#0553',
          }}
          source={img}
          placeholder={'hello'}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          marginTop: -30,
          borderTopLeftRadius: 90,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 50,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              color: '#FFA925',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            gap: 20,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={style.input}
                placeholder="ex:Elton@gmail.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Text style={{ color: 'red' }}>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={style.input}
                placeholder="**********"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text style={{ color: 'red' }}>This is required.</Text>}

          <TouchableOpacity
            style={{
              backgroundColor: '#FFA925',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                color: '#fff',
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Do you have a account?
            </Text>
            <Text
              style={{
                color: '#FFA925',
              }}
            >
              + Login here
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFA925',
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    backgroundColor: '#F5F5F5',
  },
});
