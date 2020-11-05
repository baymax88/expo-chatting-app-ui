import React from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    TextInput,
    ScrollView
} from 'react-native'
import {
    IconButton,
    Title,
} from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppLoading } from 'expo'
import {
    useFonts,
    Roboto_500Medium,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'

const HomeScreen = ({
    navigation
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

                    <View style={headerStyles.container}>
                        <View style={headerStyles.header}>
                            <IconButton icon="arrow-left" size={25} color="#222" style={headerStyles.leftButton} onPress={() => navigation.goBack()} />
                            <Title style={headerStyles.heading}>Messages</Title>
                            <View style={{flex: 1}}></View>
                        </View>
                        <View style={headerStyles.searchBoxContainer}>
                            <TextInput
                                placeholder="Search"
                                placeholderTextColor="#979797"
                                style={headerStyles.searchBox}
                            />
                        </View>
                    </View>

                    <View style={loopsStyles.container}>
                        <View style={loopsStyles.loops}>
                            <View style={loopsStyles.header}>
                                <Title style={loopsStyles.title}>Loops</Title>
                                <View style={styles.plusButton}>
                                    <IconButton icon="plus" size={20} color="#222" />
                                </View>
                            </View>

                            <View style={loopsStyles.content}>
                            </View>
                        </View>
                    </View>

                    <View style={directMessagesStyles.container}>
                        <View style={directMessagesStyles.header}>
                            <Title style={directMessagesStyles.title}>Direct messages</Title>
                            <View style={styles.plusButton}>
                                <IconButton icon="plus" size={20} color="#222" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6ac2bd',
    },
    plusButton: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 20
    }
});

const headerStyles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        borderBottomRightRadius: 40,
    },
    header: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftButton: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    heading: {
        flex: 4,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
        alignSelf: 'center',
        textAlign: 'center'
    },
    searchBoxContainer: {
        marginTop: 10,
    },
    searchBox: {
        height: 50,
        backgroundColor: '#f5f5f5',
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        paddingHorizontal: 25,
        alignItems: 'center',
        borderRadius: 15
    }
})

const loopsStyles = StyleSheet.create({
    container: {
        height: 265,
        backgroundColor: '#fff'
    },
    loops: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6ac2bd',
        borderTopLeftRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#fff',
    },
    content: {
        marginTop: 30,
    }
})

const directMessagesStyles = StyleSheet.create({
    container: {
        height: 380,
        backgroundColor: '#fdfdfd',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
    },
})

export default HomeScreen