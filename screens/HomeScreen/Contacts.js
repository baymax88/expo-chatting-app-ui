import React from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import ContactItem from './ContactItem'

const Contacts = ({
    contacts,
    removeContact
}) => {
    return (
        <View style={styles.container}>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    deleteItem={removeContact}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
    },
})

export default Contacts