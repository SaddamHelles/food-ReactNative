import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';
import yelpApi from '../api/yelp';
import { Business } from '../hooks/useResults';

interface RouteParams {
    params: { id: string };
    key: string;
    name: string;
    path?: string | undefined;
}

type Photos = {
    photos: string[];
};
type Nullable<T> = T | null;

const ResultsShow = () => {
    const [result, setResult] = useState<Photos>();
    const route = useRoute<RouteParams>();
    const { id } = route.params;

    const getResult = async (id: string) => {
        const response = await yelpApi.get(`/${id}`);
        console.log('response.data.photos: ', response.data.photos);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image
                            source={{ uri: item }}
                            style={styles.imageStyle}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default ResultsShow;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 8,
        marginTop: 12,
    },
});
