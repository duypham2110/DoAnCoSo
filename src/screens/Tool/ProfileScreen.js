import React, { useState, useContext, useEffect } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context as ProfileContext } from '../../context/ProfContext';
import Spacer from '../../components/Spacers';
import InfomationItem from '../../components/InfomationItem';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileScreen = ({navigation}) => {


    const { state, getProf } = useContext(ProfileContext);
    useEffect(() => {
        getProf();
        const listener = navigation.addListener('didFocus', () => {
            getProf();
        })
        return () => {
            listener.remove();
        }
    }, [])

    return (
        <View>
            <ScrollView>
                    <InfomationItem 
                        title={'MSSV'}
                        content={state.mssv}
                        disabled
                    />
                    <InfomationItem 
                        title={'Họ và tên'}
                        content={state.hovaten}
                        disabled
                    />
                    <InfomationItem 
                        title={'Lớp'}
                        content={state.malop}
                        disabled
                    />
                    <InfomationItem 
                        title={'Tình trạng học'}
                        content={state.tinhtranghoc}
                        disabled
                    />
                    <InfomationItem 
                        title={'Ngày sinh'}
                        content={state.ngaysinh}
                        disabled
                    />
                    <InfomationItem 
                        title={'Nơi sinh'}
                        content={state.noisinh}
                        disabled
                    />
                    <InfomationItem 
                        title={'Dân tộc'}
                        content={state.dantoc}
                        disabled
                    />
                    <InfomationItem 
                        title={'Tôn giáo'}
                        content={state.tongiao}
                        disabled
                    />
                    <InfomationItem 
                        title={'Giới tính'}
                        content={state.gioitinh}
                        disabled
                    />
                    <InfomationItem 
                        title={'Email'}
                        content={state.email}
                        disabled
                    />
                    <InfomationItem 
                        title={'Số điện thoại'}
                        content={state.sdt}
                        disabled
                    />
                    <InfomationItem 
                        title={'Số CMND'}
                        content={state.cmnd}
                        disabled
                    />
                    <InfomationItem 
                        title={'Địa chỉ'}
                        content={state.diachi}
                        disabled
                    />
                <Spacer>
                    <Button 
                        icon={
                            <Icon
                                name="check-circle"
                                size={20}
                                color="white"
                                style={{ padding: 10 }}
                            />
                        }
                        title="Cập nhật" 
                        onPress={()=>navigation.navigate('UpdateProfile',{state})} 
                />
                </Spacer>
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

export default ProfileScreen; 