import React, { useState, useContext, useEffect, useReducer } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { Context as ProfileContext } from '../../context/ProfContext';

const UpdateProfileScreen = ({ navigation }) => {   
    
    const {postProf } = useContext(ProfileContext);
    
    const [state, dispatch] = useReducer(reducer,navigation.getParam('state'));

    const [mssv, setMssv] = useState(state.mssv);
    const [hovaten, setHovaten] = useState(state.hovaten);
    const [malop, setLop] = useState(state.malop);
    const [tinhtranghoc, setTinhtranghoc] = useState(state.tinhtranghoc);
    const [ngaysinh, setNgaysinh] = useState(state.ngaysinh);
    const [noisinh, setNoisinh] = useState(state.noisinh);
    const [dantoc, setDantoc] = useState(state.dantoc);
    const [tongiao, setTongiao] = useState(state.tongiao);
    const [email, setEmail] = useState(state.email);
    const [sdt, setSdt] = useState(state.sdt);
    const [cmnd, setCmnd] = useState(state.cmnd);
    const [diachi, setDiachi] = useState(state.diachi);

    return (
        <View>            
            <ScrollView >
                <View style={styles.row}>
                    <Text style={styles.label}>MSSV:</Text>
                    <Text style={styles.input}>{mssv}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Họ tên:</Text>
                    <Text style={styles.input}>{hovaten}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Lớp:</Text>
                    <Text style={styles.input}>{malop}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tình trạng:</Text>
                    <Text style={styles.input}>{tinhtranghoc}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Ngày sinh:</Text>
                    <TextInput style={styles.input} value={ngaysinh} onChangeText={setNgaysinh} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Nơi sinh:</Text>
                    <TextInput style={styles.input} value={noisinh} onChangeText={setNoisinh} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Dân tộc:</Text>
                    <TextInput style={styles.input} value={dantoc} onChangeText={setDantoc} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tôn giáo:</Text>
                    <TextInput style={styles.input} value={tongiao} onChangeText={setTongiao} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>EMail:</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>SĐT:</Text>
                    <TextInput style={styles.input} value={sdt} onChangeText={setSdt} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>CMND:</Text>
                    <TextInput style={styles.input} value={cmnd} onChangeText={setCmnd} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Địa chỉ:</Text>
                    <TextInput style={styles.input} value={diachi} onChangeText={setDiachi} />
                </View>
                <Button title="Xác nhận" onPress={()=>postProf({mssv,hovaten,malop,tinhtranghoc,ngaysinh,noisinh,dantoc,tongiao,email,sdt,cmnd,diachi})}/>
            </ScrollView>
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

export default UpdateProfileScreen; 