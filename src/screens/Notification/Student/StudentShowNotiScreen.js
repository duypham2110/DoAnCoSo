import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as NotificationContext } from '../../../context/NotificationContext';
import { EvilIcons } from '@expo/vector-icons';

const StudentShowNotiScreen = ({navigation}) => {
    const {state } = useContext(NotificationContext);

    const blogPost = state.find((state) => state.id === navigation.getParam('id'));

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default StudentShowNotiScreen; 