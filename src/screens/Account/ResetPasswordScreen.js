import React, { useState, useContext, useEffect, useReducer } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';


const ResetPasswordScreen = () => {

    const {state,resetpassword } = useContext(AuthContext);
    const email=state.email;
    const msg=state.errorMessage;

    const [oldpassword, setOldpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    return (
        <View>
            
            <View style={styles.row}>
                    <Text style={styles.label}>Mật khẩu cũ:</Text>
                    <TextInput style={styles.input} value={oldpassword} onChangeText={setOldpassword} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Mật khẩu mới:</Text>
                    <TextInput style={styles.input} value={newpassword} onChangeText={setNewpassword} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Xác nhận mật khẩu:</Text>
                    <TextInput style={styles.input} value={confirmpassword} onChangeText={setConfirmpassword} />
                </View>
            {msg ?
                <Text style={styles.errorMessage}>{msg}</Text> : null}
            {newpassword!=confirmpassword ?
                <Text style={styles.errorMessage}>Xác nhận mật khẩu chưa chính xác</Text> : null}
            {newpassword===''||confirmpassword===''||oldpassword==='' ?
                <Text style={styles.errorMessage}>Vui lòng nhập đử thông tin</Text> : null}
                <Button title="Xác nhận" onPress={()=>resetpassword({email,oldpassword,newpassword})}/>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        flex:1,
        marginBottom: 20,
        marginRight: 20,
        marginTop: 10
    },
    label: {
        marginBottom: 5,
        fontSize: 20,
        marginLeft: 20,
        width:120,
        marginTop: 10
    },
    row: {
        flexDirection: 'row'
    }
});

export default ResetPasswordScreen; 