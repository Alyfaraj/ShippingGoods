import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import RequestItem from './RequestItem'

const RequestsList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.data}
            keyExtractor={(item) => item.id}
            renderItem={(dataItem) => (
                <RequestItem
                    date={dataItem.item.readableDate}
                    state={dataItem.item.state}
                    to={dataItem.item.to}
                    type={dataItem.item.shippingType}
                    onItemPresed={()=>props.onItemSelected(dataItem.item.id)}
                />
            )}
        />
    )
}


const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    }
});

export default RequestsList;