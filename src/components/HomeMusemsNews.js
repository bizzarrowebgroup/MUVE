import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';

import Colors from '../constants/Colors';
import { GilroyBold } from './StyledText';
import CardNews from './CardNews';
import { fetchNews } from '../constants/Api';

const HomeMusemsNews = ({
    params,
}) => {
    let [news, setNews] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        fetchNews().then(json => {
            setLoading(false);
            setNews(json);
        })
    }, []);
    return (
        <>
            <View style={{ marginLeft: 38, marginTop: 30, marginRight: 30 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <GilroyBold style={{ fontSize: 22, color: Colors.green }}>Notizie & Esibizioni</GilroyBold>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                {loading && (
                    <ActivityIndicator size="large" color={Colors.black} style={{ alignSelf: "center" }} />
                )}
                {!loading && (
                    <FlatList
                        data={news}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => String(item.id)} //tba string to number maybe?
                        renderItem={({ item }) => <CardNews params={item} />}
                        style={{ marginLeft: 38, paddingBottom: 250 }}
                    />
                )}
            </View>
        </>
    )
};

export default HomeMusemsNews;
