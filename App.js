import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, NewRivals, ProductDetails } from './screens';




const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"light" : require("./assets/fonts/Poppins-Light.ttf"),
		"bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"medium": require("./assets/fonts/Poppins-Medium.ttf"),
		"extrabold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
		"semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
	})

	useEffect(()=> {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	},[])
	if(!fontsLoaded){
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}

  return (
    <NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} 
			options={{headerShown: false}} />
			<Stack.Screen name="Cart" component={Cart} 
			options={{headerShown: false}} />
			<Stack.Screen name="ProductDetails" component={ProductDetails} 
			options={{headerShown: false}} />
			<Stack.Screen name="ProductList" component={NewRivals} 
			options={{headerShown: false}} />
			
		</Stack.Navigator>
	</NavigationContainer>
  );
}

