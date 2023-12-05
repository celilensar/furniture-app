import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
import styles from './home.style' 
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Welcome } from '../components'
import { ScrollView } from 'react-native'
import Carousel from '../components/Home/Carousel'
import Headings from '../components/Home/Headings'
import ProductRow from '../components/products/ProductRow'
import useFetch from '../hook/useFetch'
const Home = () => {

	const {data,isLoading, error} = useFetch()
  return (
	<SafeAreaView>
	  <View style={styles.appBarWrapper}>
		<View style={styles.appBar}>
			<Ionicons name="location-outline" size={24}/>
			<Text style={styles.location}> Istanbul</Text>
			<View style={{alignItems: "flex-end "}}>
				<View style={styles.cartCount}>
					<Text style={styles.cartNumber}>8</Text>
				</View>
				<TouchableOpacity>
					<Fontisto name='shopping-bag' size={24}/>
				</TouchableOpacity>
			</View>


		</View>
	  </View>
	<ScrollView>
		<Welcome/>
		<Carousel/>
		<Headings/>
		<ProductRow/>
	</ScrollView>
	</SafeAreaView>
  )
}

export default Home

