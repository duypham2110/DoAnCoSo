import React, { useState, useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';


const NotificationScreen = () => {
    
    const { state} = useContext(AuthContext);

    return (
        <View>
            <Text>NotificationScreen</Text>
            {state.role==='AD'?
                <Text>Quản trị viên</Text>:
                <Text>Sinh viên</Text>
            }
        </View>
    )
}

export default NotificationScreen; 