import React from 'react';
import {SafeAreaView} from "react-native";
import ExampleApp from "./src/PayWithCard";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GPayIcon from './src/assets/gpa.svg';
import CardIcon from './src/assets/credit-card-check-filled.svg';
import PayWithCard from "./src/PayWithCard";
import ApplePayGpay from "./src/ApplePayGpay";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Card() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Card" component={PayWithCard}
                          options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
function GPay() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Gpay" component={ApplePayGpay}
                          options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
const App = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <GestureHandlerRootView>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ color,size }) => {
                                if (route.name === 'GPay') {
                                   return  <GPayIcon width={size} height={size} fill={color}/>
                                } else if (route.name === 'Card') {
                                    return  <CardIcon width={size} height={size} fill={color}/>
                                }
                            },
                        })}
                    >
                        <Tab.Screen name="Card" component={Card} />
                        <Tab.Screen name="GPay" component={GPay} />
                    </Tab.Navigator>
                </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
};

export default App;
