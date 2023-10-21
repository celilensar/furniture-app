import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useState } from 'react'
import { ScrollView } from 'react-native'

const ProductDetails = ({navigation}) => {
  
	const [count,setCount] = useState(1)
	
	const increment= () => {
		setCount(count +1);
	}
	const decrement = () => {
		if(count >1) {
			setCount(count -1);
	}
}
	
	return (
	<ScrollView style= {styles.container}>
		<SafeAreaView style={styles.upperRow}>
			<TouchableOpacity onPress={()=> navigation.goBack()}>
			<Ionicons name='chevron-back-circle' size={30} />
			</TouchableOpacity>

			<TouchableOpacity onPress={()=> {}}>
			<Ionicons name='heart' size={30} color={COLORS.primary} />
			</TouchableOpacity>
		</SafeAreaView>
		<Image source={{uri:"https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
		style={styles.image}/>
		<View style={styles.details}>
			<View style={styles.titleRow}>
				<Text style={styles.title}>Product</Text>
				<View style={styles.priceWrapper}>
					<Text style={styles.price}>$660.78</Text>
				</View>
			</View>
			<View style={styles.ratingRow}>
				<View style={styles.rating}>
					{[1,2,3,4,5].map((index) => (
						<Ionicons key={index} name='star' size={24} color={"gold"}/>
					))}
					<Text style={styles.ratingText}>(4.9)</Text>
				</View>

				<View style={styles.rating}>
					<TouchableOpacity onPress={()=> increment()}>
						<SimpleLineIcons name='plus' size={25}/>
					</TouchableOpacity>
					<Text style={styles.ratingText}>{count}</Text>
					<TouchableOpacity onPress={()=>decrement() }>
						<SimpleLineIcons name='minus' size={25}/>
					</TouchableOpacity>
				</View>

				
			</View>
			<View style={styles.descriptionWrapper}>
				<Text style={styles.description}>Description</Text>
				<Text style={styles.descText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
			</View>

			<View style={{marginBottom: SIZES.small}}>
				<View style={styles.location}>
					<View style={{flexDirection: "row"}}>
						<Ionicons name="location-outline" size={20}/>
						<Text>Atasehir</Text>
					</View>

					<View style={{flexDirection: "row"}}>
						<MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
						<Text>Free Delivery</Text>
					</View>
						
				</View>
			</View>
			
			

			
		</View>	
	</ScrollView>
					 
  )
}

export default ProductDetails

