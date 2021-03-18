import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

import Colors from '../constants/Colors';
import { GTSuper, GilroyRegular } from '../components/StyledText';
import Icon from '../components/Icon';
import Card from '../components/Card';

import { fetchMusei } from '../constants/Api';
import MapView, { Callout } from 'react-native-maps';

import Svg, { Path } from 'react-native-svg';

const customMapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#eae9ed"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d2e0b7"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d2e0b7"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d2e0b7"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b3dced"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#e6e6e6"
            }
        ]
    }
]

const MuseiMapScreen = ({
    params,
    navigation
}) => {
    let [musei, setMusei] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchMusei().then(json => {
            setLoading(false);
            setMusei(json);
        })
    }, []);
    if (loading) {
        return (
            <View style={{ alignContent: "center", alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={require('../assets/images/icon.png')} style={{ maxHeight: 90, maxWidth: 90, resizeMode: "contain", marginBottom: 20 }} />
                <ActivityIndicator size="large" color={Colors.black} style={{ alignSelf: "center", marginBottom: 20 }} />
                <GTSuper style={{ marginHorizontal: 20, fontSize: 17, marginBottom: 20, color: Colors.black }}>Caricamento mappa in corso ...</GTSuper>
            </View>
        )
    }
    const onpressArrowBack = () => {
        navigation.pop();
    };
    const handlePress = (params) => {
        navigation.navigate('Modal', { params }, true);
    }
    return (
        <>
            <MapView
                style={{ flex: 1 }}
                // provider={}
                initialRegion={{
                    latitude: 45.468588,
                    longitude: 12.282871,
                    latitudeDelta: 0.1222,
                    longitudeDelta: 0.1421,
                }}
                customMapStyle={customMapStyle}
            >
                {
                    !loading && musei.length > 0 && musei.map(item => {
                        // console.log(item);
                        let colorMarker;
                        switch (item.tipologia) {
                            case "Arte":
                                colorMarker = Colors.red;
                                break;
                            case "Storia":
                                colorMarker = Colors.purple;
                                break;
                            case "Militare":
                                colorMarker = Colors.lightgreen;
                                break;
                            case "Scienza":
                                colorMarker = Colors.secondblue;
                                break;
                        }
                        return (
                            <MapView.Marker key={item.id} coordinate={item.coordinate}>
                                <View style={{ width: 45, height: 45, }}>
                                    <Svg height="100%" width="100%" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;">
                                        <Path fill={colorMarker} d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
		                        c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
		                        c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
		                        C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
		                        c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
                                        />
                                    </Svg>
                                </View>
                                <Callout tooltip={true} onPress={() => handlePress(item)}>
                                    <Card params={item} isMap={true} />
                                </Callout>
                            </MapView.Marker>
                        )
                    })
                }
            </MapView>
            <TouchableOpacity onPress={onpressArrowBack} style={{
                position: "absolute",
                top: 20,
                left: 10,
                width: 40,
                height: 40
            }} >
                <Icon type="SimpleLineIcons" name="arrow-left" size={25} color={Colors.green} />
            </TouchableOpacity>
            <View style={{ position: "absolute", bottom: 40, right: 40, flexDirection: "row" }}>
                <View style={{ flexDirection: "column", alignItems: "center", alignContent: "center", justifyContent: "center", marginHorizontal: 4 }}>
                    <View style={{ borderRadius: 10, width: 20, height: 20, backgroundColor: Colors.red }} />
                    <GilroyRegular style={{ fontSize: 10 }}>Arte</GilroyRegular>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", alignContent: "center", justifyContent: "center", marginHorizontal: 4 }}>
                    <View style={{ borderRadius: 10, width: 20, height: 20, backgroundColor: Colors.purple }} />
                    <GilroyRegular style={{ fontSize: 10 }}>Storia</GilroyRegular>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", alignContent: "center", justifyContent: "center", marginHorizontal: 4 }}>
                    <View style={{ borderRadius: 10, width: 20, height: 20, backgroundColor: Colors.lightgreen }} />
                    <GilroyRegular style={{ fontSize: 10 }}>Militare</GilroyRegular>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", alignContent: "center", justifyContent: "center", marginHorizontal: 4 }}>
                    <View style={{ borderRadius: 10, width: 20, height: 20, backgroundColor: Colors.secondblue }} />
                    <GilroyRegular style={{ fontSize: 10 }}>Scienza</GilroyRegular>
                </View>
            </View>
        </>
    )
};

export default MuseiMapScreen;
