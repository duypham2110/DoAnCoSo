import React, { useState, useContext } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../../components/Spacers';


const AccountScreen = ({ navigation }) => {

    const { state, signout, resetpassword } = useContext(AuthContext);

    return (
        <View>
            <Spacer>
                <Button
                    icon={
                        <Icon
                            name="info-circle"
                            size={20}
                            color="white"
                            style={{ padding: 10 }}
                        />
                    }
                    title='Thông tin'
                />
                <Spacer/>
                <Button
                    icon={
                        <Icon
                            name="question-circle"
                            size={20}
                            color="white"
                            style={{ padding: 10 }}
                        />
                    }
                    title='Trợ giúp'
                />                
                <Spacer/>
                <Button 
                    icon={
                        <Icon
                            name="retweet"
                            size={20}
                            color="white"
                            style={{ padding: 10 }}
                        />
                    }
                    title='Đặt lại mật khẩu' 
                    onPress={() => navigation.navigate('ResetPassword')} 
                />
                <Spacer/>
                <Button 
                    icon={
                        <Icon
                            name="sign-out"
                            size={20}
                            color="white"
                            style={{ padding: 10 }}
                        />
                    }
                    title='Đăng xuất' 
                    onPress={signout} 
                />
            </Spacer>
        </View>
    )
}

export default AccountScreen; 