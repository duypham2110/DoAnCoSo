import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, Image } from 'react-native';
import Spacer from '../components/Spacers';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState('1710156');
    const [password, setPassword] = useState('1');
    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.background}>
            <Spacer>
                <View style={styles.image}>
                    <Image
                        style={{ alignSelf: 'center' }}
                        source={require('../images/banner.png')}
                    />
                </View>
            </Spacer>
            <Spacer /><Spacer />
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
            {state.errorMessage ?
                <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title='Đăng nhập'
                    onPress={() => { signin({ email, password }) }}
                />
            </Spacer>
            <Button title='Sinh Viên Flow' onPress={() => navigation.navigate('SvFlow')} />
            <Button title='QTV Flow' onPress={() => navigation.navigate('SvFlow')} />
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
        paddingTop: 80
    },
    errorMessage: {
        fontSize: 16,
        color: 'red'
    }
});

export default SigninScreen; 