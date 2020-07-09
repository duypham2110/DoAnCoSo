import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { View, StyleSheet,Linking} from 'react-native';
import Datatable from '../components/Datatable';
import { Context as StatContext } from '../context/StatisticContext';

const DataTableScreen = () => {

    const {state,getCSV} = useContext(StatContext);

    return (
        <View style={styles.container}>            
            <Button  mode="contained" onPress={ ()=>{ Linking.openURL(`http://animated-spot-glade.glitch.me/csv?mssv=${state.query.mssv}&&hovaten=${state.query.hovaten}&&malop=${state.query.malop}&&gioitinh=${state.query.gioitinh}&&tinhtrang=${state.query.tinhtrang}&&noisinh=${state.query.noisinh}&&dantoc=${state.query.dantoc}&&tongiao=${state.query.tongiao}`)}}>
                    Kết xuất
                </Button>
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
                    },
                    {
                        name: 'Nơi sinh',
                        attr: 'noisinh',
                    },
                    {
                        name: 'Dân tộc',
                        attr: 'dantoc',
                    },
                    {
                        name: 'Tôn giáo',
                        attr: 'tongiao',
                    }
                ]}
                datatable={state.data}
                //page={page}
                //perPage={4}
                style={styles.table}
                Touchable={false}
            />
        </View>
    )
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

export default DataTableScreen; 