import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from './search.style'
import { Ionicons, Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'


const Search = () => {
  return (
	<SafeAreaView>
		<View style={styles.searchContainer}>
			<TouchableOpacity>
				<Ionicons style={styles.searchIcon} name="camera-outline" size={SIZES.xLarge} />
				
			</TouchableOpacity>
			<View style={styles.searchWrapper}>
				<TextInput style={styles.searchInput} value='' 
				
				placeholder='What are you looking for?'/>
			</View>
			<View>
				<TouchableOpacity style={styles.searchBtn}>
					<Feather name="search" size={24} color={COLORS.offwhite}/>
				</TouchableOpacity>
			</View>
		</View>
	</SafeAreaView>
  )
}

export default Search;