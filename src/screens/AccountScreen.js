import React from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet, Button} from 'react-native';


const AccountScreen = ({navigation}) => {
    return (
        <View>
            <Text>Account</Text>
            <Button title='Log out' onPress={()=>navigation.navigate('Signin')}/>
        </View>
    )
}

export default AccountScreen; 