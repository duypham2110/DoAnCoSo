import React, { useState, useContext } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';


const AccountScreen = ({ navigation }) => {

    const { state, signout, resetpassword } = useContext(AuthContext);

    return (
        <View>
            <Text>Account</Text>
            <Button title='Thông tin'/>
            <Button title='Trợ giúp' />
            <Button title='Đặt lại mật khẩu' onPress={() => navigation.navigate('ResetPassword')} />
            <Button title='Đăng xuất' onPress={signout} />
        </View>
    )
}

export default AccountScreen; 