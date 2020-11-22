import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Task from '../screens/task';
import Header from '../components/header/Header';

const Stack = createStackNavigator();

const options1 = {
  header: () => {
    // const {options} = scene.descriptor;

    return <Header/>;
  }
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={options1} component={Home} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
}

export default MyStack;