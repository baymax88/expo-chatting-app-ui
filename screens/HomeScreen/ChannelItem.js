import React from 'react'
import {
    TouchableOpacity,
    Animated,
    View,
    Text,
    StyleSheet
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import NewMsgAlert from '../../assets/images/red-dot.svg'

const ChannelItem = ({
    channel,
    deleteItem
}) => {
    const rightSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 0.1],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <TouchableOpacity style={styles.deleteBox} onPress={() => deleteItem(channel.id)}>
                <Animated.Text style={{
                    transform: [{scale: scale}],
                    fontFamily: 'Roboto_400Regular',
                    color: '#fff',
                    fontSize: 14
                }}>Delete</Animated.Text>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.item}>
                <Text style={styles.title}># {channel.title}</Text>
                {channel.hasNewMsg ? <NewMsgAlert /> : null}
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginHorizontal: 30,
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#fff',
    },
    deleteBox: {
        backgroundColor: '#ed4956',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75
    },
})

export default ChannelItem