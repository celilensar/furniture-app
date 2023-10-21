import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './productCardView.style'
import {Fontisto, Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = () => {

	const navigation= useNavigation();
  
	
	return (
	<TouchableOpacity onPress={()=> {navigation.navigate("ProductDetails")}}>
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{uri:"https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
				style={styles.image}
				
				/>
			</View>

			<View style={styles.details}>
				<Text style={styles.title} numberOfLines={1}>Productjkfndgjnfjdgndffdgfdgf</Text>
				<Text style={styles.supplier} numberOfLines={1}>Product</Text>
				<Text style={styles.price}>$1235</Text>

			</View>
			<TouchableOpacity style={styles.addBtn}>
				<Ionicons name='add-circle' size={35} color={COLORS.primary}/>
			</TouchableOpacity>
		</View>
		
	</TouchableOpacity>
  )
}

export default ProductCardView