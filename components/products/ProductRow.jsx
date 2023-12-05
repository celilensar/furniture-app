import { FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from '../../hook/useFetch'
import { ActivityIndicator } from 'react-native'

const ProductRow = () => {
	const {data,isLoading, error} = useFetch()
	console.log(data);
	const products= [1,2,3,4]
	
	return (
		
	<View style={styles.container}>
		{isLoading ? (
			<ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
		): error ? (
			<Text>Something went wrong</Text>
		): (
			
			<FlatList
			data={data}
			keyExtractor={(item) => item._id}
			renderItem={({item})=> (<ProductCardView item={item}/>)}
			horizontal
			contentContainerStyle= {{columnGap: SIZES.medium}}
			/>	
		) }
	</View>
  )
}

export default ProductRow

