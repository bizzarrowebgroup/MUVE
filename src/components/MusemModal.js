import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView, Image, Text, View } from 'react-native';
import { Colors } from '../constants';
import { fetchInfoMuseo } from '../constants/Api';
import { GilroyBold, GilroyRegular, GTSuper } from './StyledText';
import Icon from './Icon';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';

const MusemModal = ({ route }) => {
    // console.log(route.params.params,"2")
    const navigation = useNavigation();
    const [museo, setmuseo] = useState(route.params.params);
    const [museoinfo, setInfo] = useState({});
    const [loading, setLoading] = React.useState(true);
    const [textShown, setText] = useState(-1)
    useEffect(() => {
        if (museo) {
            fetchInfoMuseo(museo.id).then(results => {
                setInfo(results[0]);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);
    const toggleNumberOfLines = index => {
        setText(textShown === index ? -1 : index);
    };
    const onpressArrowBack = () => {
        navigation.pop();
    };
    if (loading) {
        return (
            <View style={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flex: 1
            }}>
                <GTSuper style={{
                    marginHorizontal: 20,
                    fontSize: 17,
                    marginBottom: 20,
                    color: Colors.black
                }}>Caricamento museo in corso ...</GTSuper>
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.purewhite,
        }}>
            {museo && <Image source={{ uri: museo.mainimage }} style={{
                height: 350,
                resizeMode: "cover"
            }} />}
            <TouchableOpacity onPress={onpressArrowBack} style={{
                position: "absolute",
                top: 50,
                left: 10,
                width: 40,
                height: 40,
                backgroundColor: "lightgrey",
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: "center"
            }} >
                <Icon type="SimpleLineIcons" name="arrow-left" size={20} color={Colors.green} />
            </TouchableOpacity>
            <ScrollView style={{
                flex: 1,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                top: -50,
                backgroundColor: Colors.purewhite,
            }}>
                <View style={{
                    marginVertical: 30,
                    marginHorizontal: 30
                }}>
                    {museo && <GTSuper style={{
                        textAlign: "left",
                        maxWidth: 290
                    }}>
                        {museo.titolo}
                    </GTSuper>}
                    {museoinfo && museoinfo.description && (
                        <>
                            <GilroyRegular variant="small" style={{
                                textAlign: "left",
                                marginTop: 20
                            }} numberOfLines={textShown === 2 ? undefined : 3}>
                                {museoinfo.description}
                            </GilroyRegular>
                            <GilroyRegular
                                onPress={() => toggleNumberOfLines(2)}
                                style={{ color: Colors.green, }}>
                                {textShown === 2 ? 'leggi di meno...' : 'leggi di più...'}
                            </GilroyRegular>
                        </>
                    )}
                    <View style={{
                        marginVertical: 40
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>
                            <Image source={require('../assets/images/map-preview.jpg')} style={{ borderRadius: 10, width: 50, height: 50 }} />
                            <GilroyRegular style={{
                                maxWidth: 190,
                                marginLeft: 20,
                                color: Colors.black
                            }}>{museo.indirizzo}</GilroyRegular>
                        </View>
                        <View style={{
                            marginVertical: 20
                        }}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>
                                <View style={{
                                    backgroundColor: Colors.secondwhite,
                                    borderRadius: 10,
                                    width: 50,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    alignContent: "center"
                                }}>
                                    <Icon name="calendar" color={Colors.green} size={30} style={{ top: 2.5, }} />
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: "column", justifyContent: "space-between", alignContent: "center", alignItems: "flex-start" }}>
                                    <GilroyRegular style={{
                                        marginBottom: 2.5,
                                        color: Colors.lightgreen
                                    }}>{"Oggi aperto"}</GilroyRegular>
                                    <GilroyRegular variant="small" style={{
                                        color: Colors.grey
                                    }}>{"O9.30 - 18.30"}</GilroyRegular>
                                    {/* <Text style={{
                                        fontFamily: "Gilroy-Bold",
                                        fontSize: 20,
                                        color: Colors.green
                                    }}>{"Oggi Chiuso"}</Text> */}
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 1, width: "100%", backgroundColor: Colors.grey }} />
                    </View>
                </View>
            </ScrollView>
            <Button style={{ marginHorizontal: 30, bottom: 30, backgroundColor: Colors.yellow, height: 70, borderRadius: 10 }}>
                <GilroyBold style={{ color: Colors.black, fontSize: 20, letterSpacing: 1.1 }}>{"Acquista Biglietti"}</GilroyBold>
            </Button>
        </View>
    )
};

export default MusemModal;
