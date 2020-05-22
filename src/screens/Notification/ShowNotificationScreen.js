import React, { useContext } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as NotificationContext } from '../../context/NotificationContext';
import { EvilIcons } from '@expo/vector-icons';


const ShowNotificationScreen = ({navigation}) => {
    const {state } = useContext(NotificationContext);

    const blogPost = state.find((state) => state.id === navigation.getParam('id'));

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowNotificationScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:() => ( <TouchableOpacity
            onPress={() =>
                navigation.navigate('Edit', { id: navigation.getParam('id') })
            }
        >
            <EvilIcons name="pencil" size={35} />   
        </TouchableOpacity>
        
        )
    }
}

const styles = StyleSheet.create({});

export default ShowNotificationScreen; 