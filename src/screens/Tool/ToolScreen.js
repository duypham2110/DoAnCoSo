import React, { useState, useContext } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';


const ToolScreen = ({ navigation }) => {
    return (
        <View>
            <Button title='Thông tin sinh viên' onPress={() => navigation.navigate('Profile')} />
            <Button title='Chương trình đào tạo' onPress={() => navigation.navigate('Program')}  />
            <Button title='Xem điểm' onPress={() => navigation.navigate('Score')}  />
            <Button title='Học phí' onPress={() => navigation.navigate('Tuition')}  />
        </View>
    )
}

export default ToolScreen; 