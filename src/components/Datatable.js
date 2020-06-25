import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View, StyleSheet,ScrollView,Dimensions } from 'react-native';


function Datatable({ header, datatable = [], page = 1, perPage = 30, style }) {
  const [state, setState] = useState({
    datatable,
    page: page - 1,
    perPage,
    numberOfPages: Math.ceil(datatable.length / perPage),
  });

  const getValue = (object, path) => {
    return path
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
      .reduce((o, k) => (o || {})[k], object);
  };

  useEffect(() => {
    //console.log('useEffect:', state);
  });

  return (
      <ScrollView horizontal={true}>
    <DataTable style={style}>
      <DataTable.Header>
        {header.map((item, i) => {
          let sortDirection = item.sortDirection ? item.sortDirection : false;
          console.log(sortDirection);
          return (
            <DataTable.Title
              key={i}
              //onClick={a => console.log('title', a)}
              sortDirection={sortDirection}>
              {item.name}
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
        <ScrollView>
      {state.datatable
        .slice(state.perPage * state.page, state.perPage * (state.page + 1))
        .map((item, i) => {
          return (
            <DataTable.Row key={i}>
              {header.map((headerItem, j) => {
                return (
                  <DataTable.Cell key={j} style={styles.cell} >
                    {getValue(item, headerItem.attr)}
                  </DataTable.Cell>
                );
              })}
            </DataTable.Row>
          );
        })}
        </ScrollView>
      <DataTable.Pagination
        page={state.page}
        numberOfPages={state.numberOfPages}
        onPageChange={page => {
          console.log('change', page);
          setState({ ...state, page });
        }}
        label={state.page + 1 + ' of ' + state.numberOfPages}
      />
    </DataTable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    cell: {
        textAlign:'left',
    }
  });


export default Datatable;
