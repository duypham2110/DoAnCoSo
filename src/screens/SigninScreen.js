import React from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';


const SigninScreen = ({navigation}) => {
    return (
        <View>
            <Text>SignIn</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SvFlow')}>
            <Text>Sinh Vien Sign In </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('QtvFlow')}>
            <Text>Quan Tri VienVien Sign In </Text>
        </TouchableOpacity>
        </View>
    )
}

export default SigninScreen; 