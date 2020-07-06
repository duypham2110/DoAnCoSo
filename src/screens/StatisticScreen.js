import React, { useState,useContext,useEffect} from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Datatable from '../components/Datatable';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput} from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import { Context as StatContext } from '../context/StatisticContext';

const StatisticScreen = ({ navigation }) => {   

    const { state, getKhoa } = useContext(StatContext);
    
    useEffect(() => {
        getKhoa();
        const listener = navigation.addListener('didFocus', () => {
            getKhoa();
        })
        return () => {
            listener.remove();
        }
    }, [])

    let datatable = [      
    {
        "mssv": "1512928",
        "hovaten": "Bùi Mạnh Quyết",
        "malop": "CTK39",
        "tinhtranghoc": "Còn học",
        "noisinh": "null",
        "ngaysinh": "null",
        "dantoc": "null",
        "gioitinh": "Nữ",
        "sdt": "null",
        "email": "null",
        "cmnd": "null",
        "diachi": "null"
    }
    ];

    const khoaData =state.khoa;
    
    const lopData = [{
        makhoa: 'CTK40',
        value:'CTK'
    },{
        makhoa: 'CTK41',
        value:'CTK'
    }, {
        makhoa: 'VTK41',
        value:'VTK'
    }, {
        makhoa: 'Khác',
        value:'CTK'
    }];
    console.log(state.khoa)
    console.log(lopData);
    const [mssv, setMssv] = useState('');
    const [hovaten, setHovaten] = useState('');
    const makhoa='';
    const malop='';

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
                value={mssv}
                onChangeText={setMssv}
            />   
            <View style={{paddingHorizontal:8,flex:1}}>
                <Dropdown
                    label='Khoa'
                    data={khoaData}
                    value={khoaData.value}
                /> 
                <Dropdown
                    label='Lớp'
                    data={lopData}
                    makhoa={lopData.value}
                /> 
            </View>
            <Datatable            
                header={[
                    {
                    name: 'MSSV',
                    attr: 'mssv',
                    },
                    {
                    name: 'Họ và tên',
                    attr: 'hovaten',
                    },
                    {
                    name: 'Lớp',
                    attr: 'malop',
                    },
                    {
                    name: 'Giới tính',
                    attr: 'gioitinh',
                    },
                    {
                    name: 'Tình trạng',
                    attr: 'tinhtranghoc',
                    }                    
                ]}
                datatable={datatable}
                //page={page}
                //perPage={4}
                style={styles.table}
                />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding:8
  },
  table: {
      backgroundColor: '#fff'
  },
  scrollView: {
  },
});

export default StatisticScreen; 