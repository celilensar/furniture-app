import { View, Text, TouchableOpacity, TextInput, Image, FlatList} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from './search.style'
import { Ionicons, Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import { useState } from 'react'
import axios from 'axios'
import SearchTile from '../components/products/SearchTile'


const Search = () => {
 const [searchKey, setSearchKey] = useState('')
 const [searchResults, setSearchResults] = useState([])
console.log(searchResults)
const handleSearch= async () => {
//	

	try {
		const response = await axios.get(`http://192.168.1.2:3000/api/products/search/${searchKey}`)

		setSearchResults(response.data)

	} catch (error) {
		console.log("failed to get products")
	}
}

  return (
	<SafeAreaView>
		<View style={styles.searchContainer}>
			<TouchableOpacity>
				<Ionicons style={styles.searchIcon} name="camera-outline" size={SIZES.xLarge} />
				
			</TouchableOpacity>
			<View style={styles.searchWrapper}>
				<TextInput style={styles.searchInput}
				 value={searchKey} 
				 onChangeText={setSearchKey}
				 placeholder='What are you looking for?'/>
				
			</View>
			<View>
				<TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
					<Feather name="search" size={24} color={COLORS.offwhite}/>
				</TouchableOpacity>
			</View>
		</View>
		{searchResults.length === 0 ? (
			<View style={{flex:1,width:"70%",alignSelf: "center"}}>
				<Image source={require('../assets/images/Pose23.png')}
				style={styles.searchImage} />
			</View>
		): (
			<FlatList
			data={searchResults}
			keyExtractor={(item) => item._id}
			renderItem={({item}) => (<SearchTile item= {item}/>)}
			/>
		) }
	</SafeAreaView>
  )
}

export default Search;