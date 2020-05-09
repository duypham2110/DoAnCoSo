import React, { useEffect, useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet, FlatList } from 'react-native';
import { Context as NotificationContext } from '../../context/NotificationContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationScreen = ({ navigation }) => {
    const { state, getNoti } = useContext(NotificationContext);
    useEffect(() => {
        getNoti();
        const listener = navigation.addListener('didFocus', () => {
            getNoti();
        })
        return () => {
            listener.remove();
        }
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(state) => `item${state.id}`}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('ShowNotification', { id: item.id })} >
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.author}</Text>

                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

NotificationScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CreateNotification')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity> 
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default NotificationScreen; 