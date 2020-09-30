import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* navigation prop is passed in to every screen component in stack navigato.
    navigate('Details') we call the navigate function(on the navigation prop)
    with the name of the route that we'd like to move the user to.
    If we call navigation.navigate with a route name no defined on a stack
    navigator, nothing will happen.
    Passing Parameters can be done by:
    Pass params to a route by putting them in an object as a
    second parameter to the navigation.navigate function:
    navigation.navigate('RouteName', {  params go here  })*/


function HomeScreen({ navigation }) {
    return(
        <View style={{flex: 1,
                alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            {/*If the navigate('name') is not the name you set
                on stack.screen then it won't work*/}
            <Button title="Go to Details"
                onPress={() => {navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                });
            }} />
        </View>
    );
}

/* Nothing will happen since you're already on the Details route.
    If you change it from navigation.navigate to navigation.push it will
    take you back to details. In the cases you pass information from Details
    back to Details. Push works on mobile not web.
    goBack is the same as the back arrow. In case you want to prgram it.
    popToTop works just like navigate('Home') it returns first screen in stack
 */
function DetailsScreen({ route, navigation }) {
    const { itemId } = route.params;
    const { otherParam } = route.params; // looks like it pops it from stack
    return(
        <View style={{flex: 1,
                alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button title="Go to Details....again(nothing)"
                onPress={() => navigation.navigate('Details')} />
            <Text>{"\n"}</Text>
            <Button title="Go to Details....again(reload)"
                onPress={() => navigation.push('Details')} />
                <Text>{"\n"}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Text>{"\n"}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
                <Text>{"\n"}</Text>
            <Button title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()} />

        </View>
    );
}


const Stack = createStackNavigator();

export default function App() {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    {/* now has home route and details route*/}
                    <Stack.Screen name = "Home" options={{title: 'Overview'}}
                        component={HomeScreen} />
                    <Stack.Screen name="Details" initialParams={{ itemId: 42 }}
                        component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

}
