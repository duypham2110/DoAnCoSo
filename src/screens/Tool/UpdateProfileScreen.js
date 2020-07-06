import React, { useState, useContext, useEffect, useReducer } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { TextInput,Divider} from 'react-native-paper';
import { Context as ProfileContext } from '../../context/ProfContext';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'

const UpdateProfileScreen = ({ navigation }) => {   
    
    const {postProf } = useContext(ProfileContext);
    
    const state = navigation.getParam('state');

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
    const [gioitinh, setGioitinh] = useState(state.gioitinh);

    let gioiTinhData = [{
        value: 'Nam',
      }, {
        value: 'Nữ',
      }, {
        value: 'Khác',
      }];

    let noiSinhData = [{
        value: 'Lâm Đồng',
    },{
        value: 'An Giang',
    }, {
        value: 'Bà Rịa-Vũng Tàu',
    }, {
        value: 'Bạc Liêu',
    }, {
        value: 'Bắc Kạn',
    }, {
        value: 'Bắc Giang',
    }, {
        value: 'Bắc Ninh',
    }, {
        value: 'Bến Tre',
    }, {
        value: 'Bình Dương',
    }, {
        value: 'Bình Định',
    }, {
        value: 'Bình Phước',
    }, {
        value: 'Bình Thuận',
    }, {
        value: 'Cà Mau',
    }, {
        value: 'Cao Bằng',
    }, {
        value: 'Cần Thơ',
    }, {
        value: 'Đà Nẵng',
    }, {
        value: 'Đắk Lắk',
    }, {
        value: ' Đắk Nông',
    }];

    return (
        <View>            
            <ScrollView >                      
            <View style={styles.view}>
                <TextInput        
                    label='MSSV'
                    mode='outlined'
                    style={styles.textInput}
                    value={mssv}
                    disabled
                />    
                <TextInput        
                    label='Lớp'
                    mode='outlined'
                    style={styles.textInput}
                    value={malop}
                    disabled
                />      
                <TextInput        
                    label='Tình trạng'
                    mode='outlined'
                    style={styles.textInput}
                    value={tinhtranghoc}
                    disabled
                />   
            </View>
                <View style={styles.view}>
                    <TextInput        
                        label='Họ và tên'
                        mode='outlined'
                        style={{padding:8,flex:3}}
                        value={hovaten}
                        disabled
                    />
                    <View style={{paddingHorizontal:16,flex:1}}>
                        <Dropdown
                        label='Giới tính'
                        data={gioiTinhData}
                        value={gioitinh}
                        onChangeText={setGioitinh}
                        /> 
                    </View> 
                </View>
                <View
                    style={{flexDirection:'row',
                        justifyContent:'flex-start',
                        paddingHorizontal:8}} >
                <View
                    style={{
                        paddingVertical:12,
                        padding:8}} >
                    <Text>Ngày sinh</Text>
                    <DatePicker               
                        date={ngaysinh}
                        mode="date"
                        placeholder="Chọn ngày"
                        format="DD-MM-YYYY"
                        confirmBtnText="Xác nhận"
                        cancelBtnText="Hủy"
                        onDateChange={setNgaysinh}
                        showIcon={false}
                    />   
                </View>
                <View style={{paddingHorizontal:16,flex:1}}>
                    <Dropdown
                        label='Nơi sinh'
                        data={noiSinhData}
                        value={noisinh}
                        onChangeText={setNoisinh}
                    /> 
                </View>
                </View>
                <TextInput        
                    label='Tôn giáo'
                    mode='outlined'
                    style={styles.textInput}
                    value={tongiao}
                    onChangeText={setTongiao}
                /> 
                <TextInput        
                    label='Email'
                    mode='outlined'
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                />         
                <TextInput        
                    label='Số điện thoại'
                    mode='outlined'
                    style={styles.textInput}
                    value={sdt}
                    onChangeText={setSdt}
                />         
                <TextInput        
                    label='CMND'
                    mode='outlined'
                    style={styles.textInput}
                    value={cmnd}
                    onChangeText={setCmnd}
                />         
                <TextInput        
                    label='Địa chỉ'
                    mode='outlined'
                    style={styles.textInput}
                    value={diachi}
                    onChangeText={setDiachi}
                />
                <Button title="Xác nhận" onPress={()=>postProf({mssv,hovaten,malop,tinhtranghoc,ngaysinh,noisinh,dantoc,tongiao,email,sdt,cmnd,diachi,gioitinh})}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({    
    textInput:{
        padding:8,
        flex:1      
    },
    view:{
        flex:1, 
        flexDirection:'row'
    }
});

export default UpdateProfileScreen; 