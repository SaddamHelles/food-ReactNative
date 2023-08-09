// App.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../navigation/RootNavigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PropsHome, PropsDetails, RootStackParamList } from '../types/types';
import Search from '@/src/pages/Search';
import ResultsShow from '@/src/pages/ResultsShow';

function HomeScreen({ navigation }: PropsHome) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() =>
                    navigation.navigate('Details', { sort: 'latest' })
                }
            />
        </View>
    );
}

function DetailsScreen({ navigation }: PropsDetails) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer ref={navigationRef} independent={true}>
            <Stack.Navigator
                screenOptions={{
                    title: 'Business Search',
                }}>
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen
                    name="ResultsShow"
                    component={ResultsShow}
                    options={{ title: 'Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
