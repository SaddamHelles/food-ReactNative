import { PropsSearch } from '@/types/types';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
    term: string;
    onChangeTerm: (term: string) => void;
    onTermSubmit: () => void;
}

const SearchBar = ({ term, onChangeTerm, onTermSubmit }: Props) => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons
                name="search-sharp"
                style={styles.iconStyle}
                color="black"
            />
            {/* <Text>Search Bar</Text> */}
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onChangeTerm}
                style={styles.inputStyle}
                placeholder="Search"
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        borderRadius: 4,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10,
        // gap: 8,
    },
    inputStyle: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    },
});
export default SearchBar;
