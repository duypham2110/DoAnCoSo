import React, { useState, useContext, useEffect } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context as ProfileContext } from '../../context/ProfContext';
import Spacer from '../../components/Spacers';
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
                    <View style={styles.row}>
                        <Text style={styles.label}>MSSV:</Text>
                        <Text style={styles.input}>{state.mssv}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Họ tên:</Text>
                        <Text style={styles.input}>{state.hovaten}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Lớp:</Text>
                        <Text style={styles.input}>{state.malop}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Tình trạng:</Text>
                        <Text style={styles.input}>{state.tinhtranghoc}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Ngày sinh:</Text>
                        <Text style={styles.input}>{state.ngaysinh}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Nơi sinh:</Text>
                        <Text style={styles.input}>{state.noisinh}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Dân tộc:</Text>
                        <Text style={styles.input}>{state.dantoc}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Tôn giáo:</Text>
                        <Text style={styles.input}>{state.tongiao}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.input}>{state.email}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>SĐT:</Text>
                        <Text style={styles.input}>{state.sdt}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>CMND:</Text>
                        <Text style={styles.input}>{state.cmnd}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Địa chỉ:</Text>
                        <Text style={styles.input}>{state.diachi}</Text>
                    </View>
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