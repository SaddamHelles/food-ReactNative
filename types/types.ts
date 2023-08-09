import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    ResultsShow: undefined;
    Profile: { userId: string };
    Details: { sort: 'latest' | 'top' } | undefined;
};

export type PropsHome = NativeStackScreenProps<
    RootStackParamList,
    'Home',
    'MyStack'
>;

export type PropsDetails = NativeStackScreenProps<
    RootStackParamList,
    'Details',
    'MyStack'
>;

export type PropsSearch = NativeStackScreenProps<
    RootStackParamList,
    'Search',
    'MyStack'
>;

export type PropsResultsShow = NativeStackScreenProps<
    RootStackParamList,
    'ResultsShow',
    'MyStack'
>;
