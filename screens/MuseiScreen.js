import React, { useState, useEffect, useRef } from 'react';
import { Animated, Text, Dimensions, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import { LinearGradient } from 'expo-linear-gradient';

import {
    TabView,
    SceneMap,
    TabBar,
    // TabIndicator,
} from 'react-native-tab-view';

import Card from '../components/Card';
import Header from '../components/Header';
import Colors from '../constants/Colors';

import { fetchMusei } from '../constants/Api';
import _ from "lodash";
import { window } from '../constants/Layout';


const FirstRoute = () => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            setMusei(json);
        })
    }, []);
    return (
        <View style={styles.container}>
            {!loading && (<FlatList
                data={musei}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)} //tba string to number maybe?
                renderItem={({ item }) => <Card params={item} colore={Colors.black} />}
                style={styles.museoview}
                scrollEventThrottle={100}
                contentInsetAdjustmentBehavior="scrollableAxes"
            />)}
        </View>
    )
};
const SecondRoute = () => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            let MuseiJson = [];
            json.map(item => {
                if (item.tipologia === 'Arte') {
                    MuseiJson.push(item);
                }
            })
            setMusei(MuseiJson);
        })
    }, []);
    return (
        <View style={styles.container}>
            {!loading && (<FlatList
                data={musei}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)} //tba string to number maybe?
                renderItem={({ item }) => <Card params={item} colore={Colors.red} />}
                style={styles.museoview}
                contentInsetAdjustmentBehavior="scrollableAxes"
            />)}
        </View>
    )
};
const ThirdRoute = () => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            let MuseiJson = [];
            json.map(item => {
                if (item.tipologia === 'Storia') {
                    MuseiJson.push(item);
                }
            })
            setMusei(MuseiJson);
        })
    }, []);
    return (
        <View style={styles.container}>
            {!loading && (<FlatList
                data={musei}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)} //tba string to number maybe?
                renderItem={({ item }) => <Card params={item} colore={Colors.purple} />}
                style={styles.museoview}
                contentInsetAdjustmentBehavior="scrollableAxes"
            />)}
        </View>
    )
};
const FourthRoute = () => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            let MuseiJson = [];
            json.map(item => {
                if (item.tipologia === 'Militare') {
                    MuseiJson.push(item);
                }
            })
            setMusei(MuseiJson);
        })
    }, []);
    return (
        <View style={styles.container}>
            {!loading && (<FlatList
                data={musei}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)} //tba string to number maybe?
                renderItem={({ item }) => <Card params={item} colore={Colors.lightgreen} />}
                style={styles.museoview}
                contentInsetAdjustmentBehavior="scrollableAxes"
            />)}
        </View>
    )
};
const FifthRoute = () => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            let MuseiJson = [];
            json.map(item => {
                if (item.tipologia === 'Scienza') {
                    MuseiJson.push(item);
                }
            })
            setMusei(MuseiJson);
        })
    }, []);
    return (
        <View style={styles.container}>
            {!loading && (<FlatList
                data={musei}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)} //tba string to number maybe?
                renderItem={({ item }) => <Card params={item} colore={Colors.secondblue}/>}
                style={styles.museoview}
                contentInsetAdjustmentBehavior="scrollableAxes"
            />)}
        </View>
    )
};

const initialLayout = { width: window.width };
const MuseiScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: '1', title: 'Tutti' },
        { key: '2', title: 'Arte' },
        { key: '3', title: 'Storia' },
        { key: '4', title: 'Militare' },
        { key: '5', title: 'Scienza', },
    ]);

    const renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
        '3': ThirdRoute,
        '4': FourthRoute,
        '5': FifthRoute,
    });

    const TabIndicator = props => {
        const { width, tabWidth, index, color } = props;
        const marginLeftRef = useRef(new Animated.Value(index ? tabWidth : 0)).current;
        useEffect(() => {
            Animated.timing(marginLeftRef, {
                toValue: tabWidth,
                duration: 500
            }).start()
        }, [tabWidth]);
        return (
            <Animated.View
                style={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flex: 1,
                    width: width,
                    marginLeft: marginLeftRef
                }}
            >
                <View
                    // start={{ x: 0, y: 0 }}
                    // end={{ x: 1, y: 0 }}
                    // colors={["#50b0ea", "#80a2ed", "#a797f2", "#e981f4"]}
                    style={{ backgroundColor: color, height: 3, bottom: 5, width: "100%" }}
                />
            </Animated.View>
        );
    }

    const renderIndicator = (
        props
    ) => {
        const { getTabWidth } = props;
        const tabWidth = _.sum([...Array(index).keys()].map(i => getTabWidth(i)));
        let coloreLinea = Colors.purewhite;
        switch (index) {
            case 0:
                coloreLinea = Colors.black;
                break;
            case 1:
                coloreLinea = Colors.red;
                break;
            case 2:
                coloreLinea = Colors.purple;
                break;
            case 3:
                coloreLinea = Colors.lightgreen;
                break;
            case 4:
                coloreLinea = Colors.secondblue;
                break;
        }
        return (
            <TabIndicator
                color={coloreLinea}
                width={getTabWidth(index)}
                tabWidth={tabWidth}
                index={index}
            />
        )
    };

    const renderLabel = ({ route, focused, color }) => {
        let coloreTesto = Colors.purewhite;
        switch (route.key) {
            case '1':
                coloreTesto = Colors.black;
                break;
            case '2':
                coloreTesto = Colors.red;
                break;
            case '3':
                coloreTesto = Colors.purple;
                break;
            case '4':
                coloreTesto = Colors.lightgreen;
                break;
            case '5':
                coloreTesto = Colors.secondblue;
                break;
        }
        return (
            <Text style={{ color: coloreTesto, fontSize: 15, fontFamily: 'gilroy-regular' }}>
                {route.title}
            </Text>
        )
    };

    const renderTabBar = props => {
        return (
            <TabBar
                {...props}
                renderLabel={renderLabel}
                inactiveColor={Colors.black}
                activeColor={Colors.green}
                indicatorStyle={{
                    backgroundColor: Colors.green,
                    height: 3,
                }}
                style={{
                    backgroundColor: 'transparent',
                    marginHorizontal: 20,
                    shadowOffset: { height: 0, width: 0 },
                    shadowColor: 'transparent',
                    shadowOpacity: 0,
                    elevation: 0
                }}
                renderIndicator={renderIndicator}
            />
        )
    };

    const navigationState = { index, routes };
    return (
        <>
            <View style={styles.contentContainer}>
                {/* <LinearGradient
                    colors={[Colors.black, Colors.secondwhite ]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 180,
                    }}
                /> */}
                <TabView
                    lazy={true}
                    swipeEnabled={true}
                    // pressColor={"transparent"}
                    renderScene={renderScene}
                    initialLayout={initialLayout}
                    navigationState={navigationState}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    style={{
                        backgroundColor: 'transparent'
                    }}
                />
            </View>
            <Header title={"I Nostri Musei"} navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.secondwhite,
        paddingTop: 160
    },
    container: {
        flex: 1,
        // backgroundColor: Colors.secondwhite,
    },
    tabBar: {
        flexDirection: 'row',
        marginTop: 180,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    museoview: {
        flex: 1,
        paddingVertical: 20,
    }
});

export default MuseiScreen;