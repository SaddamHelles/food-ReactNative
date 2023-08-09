import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Business } from '../hooks/useResults';

interface Props {
    result: Business;
}
const ResultDetails = ({ result }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: result.image_url }}
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    nameStyle: {
        fontWeight: 'bold',
    },
});
export default ResultDetails;
