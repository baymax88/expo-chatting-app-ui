import React from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import ChannelItem from './ChannelItem'

const Channels = ({
    channels,
    removeChannel
}) => {
    return (
        <View style={styles.container}>
            {channels.map(channel => (
                <ChannelItem
                    key={channel.id}
                    channel={channel}
                    deleteItem={removeChannel}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
    }
})

export default Channels
