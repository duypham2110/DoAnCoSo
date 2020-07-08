import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet} from 'react-native';
import Datatable from '../components/Datatable';
import { Context as StatContext } from '../context/StatisticContext';


const AccountTableScreen = () => {

    const {state} = useContext(StatContext);
    
    return (
        <View style={styles.container}>
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
                    }
                ]}
                datatable={state.data}
                Touchable={true}
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

export default AccountTableScreen; 