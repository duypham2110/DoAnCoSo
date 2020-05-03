import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, Image } from 'react-native';
import Spacer from '../components/Spacers';


const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.background}>
            <Spacer>
                <View style={styles.image}>
                    <Image
                        style={{alignSelf:'center'}}
                        source={require('../images/banner.png')}
                    />
                </View>
            </Spacer>
            <Spacer/><Spacer/>
            <Spacer>
                <Input
                    label="Tài khoản:"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    label="Mật khẩu:"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                />
            </Spacer>
            <Spacer>
                <Button
                    title='Đăng nhập'
                />
            </Spacer>
                <Button title='Sinh Viên Flow' onPress={()=>navigation.navigate('SvFlow')}/>
                <Button title='QTV Flow' onPress={()=>navigation.navigate('SvFlow')}/>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop:80
    },
    errorMessage: {
        fontSize: 16,
        color: 'red'
    }
});

export default SigninScreen; 