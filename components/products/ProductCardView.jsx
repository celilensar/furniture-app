import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './productCardView.style'
import {Fontisto, Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = ({item}) => {
	
	const navigation= useNavigation();
  
	const { title, price, imageUrl, supplier } = item;
	return (
	
	<TouchableOpacity onPress={()=> {navigation.navigate("ProductDetails", {item})}}>
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{uri: imageUrl}}
				style={styles.image}
				
				/>
			</View>

			<View style={styles.details}>
				<Text style={styles.title} numberOfLines={1}>{title}</Text>
				<Text style={styles.supplier} numberOfLines={1}>{supplier}</Text>
				<Text style={styles.price}>{price}</Text>

			</View>
			<TouchableOpacity style={styles.addBtn}>
				<Ionicons name='add-circle' size={35} color={COLORS.primary}/>
			</TouchableOpacity>
			<Text>{title}</Text>
		</View>
		
	</TouchableOpacity>
  )
}

export default ProductCardView