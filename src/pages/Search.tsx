import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { PropsSearch } from '@/types/types';
import SearchBar from '../components/SearchBar';
import useResults, { Business } from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const Search = ({ navigation }: PropsSearch) => {
    const [term, setTerm] = useState('');
    const { searchApi, results, errorMessage } = useResults();

    const filterResultsByPrice = (price: string): Business[] | undefined => {
        return results?.businesses.filter(result => result.price === price);
    };
    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onChangeTerm={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>{errorMessage}</Text>
            <ScrollView>
                <ResultsList
                    result={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    result={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    result={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Search;
