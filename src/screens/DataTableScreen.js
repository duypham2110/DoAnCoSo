import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet} from 'react-native';
import Datatable from '../components/Datatable';
import { Context as StatContext } from '../context/StatisticContext';


const DataTableScreen = () => {

    const {state} = useContext(StatContext);

    return (
        <View style={styles.container}>
            <Text>DataTableScreen</Text>
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
                datatable={state.data}
                //page={page}
                //perPage={4}
                style={styles.table}
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