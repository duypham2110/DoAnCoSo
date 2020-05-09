import React, { useState, useContext } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { Context as NotificationContext } from '../../context/NotificationContext';

const CreateNotificationScreen = () => {
    const [title, setTitle] = useState(' ');
    const [content, setContent] = useState(' ');
    const { postNoti } = useContext(NotificationContext);

    return (
        <View>
            <Text style={styles.label}>Tiêu đề:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text style={styles.label}>Nội dung:</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} />

            <Button
                title="Đăng thông báo"

                onPress={() => { postNoti(title, content) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        marginBottom: 5,
        fontSize: 20,
        marginLeft: 5
    }
});

export default CreateNotificationScreen; 