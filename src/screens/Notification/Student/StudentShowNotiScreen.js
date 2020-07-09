import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as NotificationContext } from '../../../context/NotificationContext';
import { EvilIcons } from '@expo/vector-icons';

const StudentShowNotiScreen = ({navigation}) => {
    const {state } = useContext(NotificationContext);

    const blogPost = state.find((state) => state.id === navigation.getParam('id'));

    return <View style={{ flex: 1 }}>
    <Text style={styles.title}>{blogPost.title}</Text>
    <View style={{ flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.content}>{blogPost.content}</Text>
    </View>
</View>
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 20
    },
    content: {
        backgroundColor: 'white',
        padding: 20,
        fontSize: 18
    },
    image: {
        width: 200,
        height: 200,
        marginHorizontal:100,
        borderWidth:0.5,
        borderColor:'#777'
    }
});

export default StudentShowNotiScreen; 