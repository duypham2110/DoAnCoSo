import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import Datatable from '../components/Datatable';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import { Context as StatContext } from '../context/StatisticContext';
import { navigate } from '../navigationRef';


const StatisticScreen = ({ navigation }) => {

    const { state, getLop, getKhoa, getData } = useContext(StatContext);

    const updateLop = (value) => {
        getLop(value);
    }

    useEffect(() => {
        getKhoa();
        const listener = navigation.addListener('didFocus', () => {
            getKhoa();
        })
        return () => {
            listener.remove();
        }
    }, [])


    let gioiTinhData = [{
        value: ''
      }, {
        value: 'Nam'
      }, {
        value: 'Nữ'
      }, {
        value: 'Khác'
      }];

    const [mssv, setMssv] = useState('');
    const [hovaten, setHovaten] = useState('');
    const [makhoa, setMakhoa] = useState('');
    const [malop, setMaLop] = useState('');
    const [gioitinh, setGioitinh] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                label='MSSV'
                keyboardType={'numeric'}
                mode='outlined'
                style={styles.textInput}
                value={mssv}
                onChangeText={setMssv}
            />
            <TextInput
                label='Họ và tên'
                mode='outlined'
                style={styles.textInput}
                value={hovaten}
                onChangeText={setHovaten}
            />
            <View style={{ paddingHorizontal: 8, flex: 1 }}>
                <Dropdown
                    label='Khoa'
                    data={state.khoa}
                    onChangeText={(text) => {
                        setMakhoa(text);
                        setMaLop(' ');
                        updateLop(text);
                    }}
                    value={makhoa}
                />
                <Dropdown
                    label='Lớp'
                    data={state.lop}
                    onChangeText={(text) => {
                        setMaLop(text);
                    }}
                    value={malop}
                />
                <Dropdown
                    label='Giới tính'
                    data={gioiTinhData}
                    onChangeText={setGioitinh}
                    value={gioitinh}
                />
            </View>
            <Button
                title='Xác nhận'
                onPress={()=>{         
                    malop.length<makhoa.length?
                    getData(mssv,hovaten,makhoa,gioitinh)
                    :           
                    getData(mssv,hovaten,malop,gioitinh);
                }}
            />
            <Button
                title='Xóa tất cả'
                onPress={()=>{         
                    setMssv('')       
                    setHovaten('')       
                    setGioitinh('')       
                    setMaLop('')  
                    setMakhoa('')
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8
    },
    table: {
        backgroundColor: '#fff'
    },
    scrollView: {
    },
});

export default StatisticScreen; 