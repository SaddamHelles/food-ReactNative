import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import * as RootNavigation from '../../navigation/RootNavigation';

import { Business } from '../hooks/useResults';
import ResultDetails from './ResultDetails';

interface Props {
    title: string;
    result: Business[] | undefined;
}
const ResultsList = ({ title, result }: Props) => {
    return result?.length ? (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>

            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={res => res.id}
                horizontal
                data={result}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            RootNavigation?.navigate('ResultsShow', {
                                id: item.id,
                            })
                        }>
                        <ResultDetails result={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    ) : (
        <></>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
});
export default ResultsList;
