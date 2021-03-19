import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { Colors } from '../constants';
import { GilroyBold, GilroyRegular } from './StyledText';
import CardTopVisited from './CardTopVisited';

import { fetchMusei } from '../constants/Api';

const HomeMusemsTopVisitedCards = ({ navigation }) => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            let MuseiJson = [];
            json.map(item => {
                if (item.istop) {
                    MuseiJson.push(item);
                }
            })
            setMusei(MuseiJson);
        })
    }, []);
    return (
        <>
            <View style={{ marginLeft: 38, marginTop: 30, marginRight: 30 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>
                    <GilroyBold style={{ color: Colors.green }}>Più visitati</GilroyBold>
                    <TouchableOpacity onPress={() => navigation.navigate('Musei')}>
                        <GilroyRegular style={{ color: Colors.grey }}>Mostra tutti</GilroyRegular>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                {loading && (
                    <ActivityIndicator size="large" color={Colors.black} style={{ alignSelf: "center" }} />
                )}
                {!loading && (
                    <FlatList
                        horizontal
                        data={musei}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => String(item.id)} //tba string to number maybe?
                        renderItem={({ item }) => <CardTopVisited params={item} navigation={navigation} />}
                        contentContainerStyle={{ marginHorizontal: 38, paddingRight: 50 }}
                        contentInsetAdjustmentBehavior="scrollableAxes"
                    />
                )}
            </View>
        </>
    )
};

export default HomeMusemsTopVisitedCards;
