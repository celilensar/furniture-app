import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {

	const slides = [
		"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	]

  return (
	<View style={styles.carouselContainer}>
		<SliderBox images={slides}
		dotColor= {COLORS.primary}
		inactiveDotColor={COLORS.secondary}
		ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
		autoPlay
		circleLoop
		/>
	</View>
  )
}

export default Carousel

const styles = StyleSheet.create({
	carouselContainer: {
		flex: 1,
		alignItems: "center"
	}
})