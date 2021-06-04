import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// for svg needs install -> expo install react-native-svg
// for use SVG like component needs to install -> yarn add --dev react-native-svg-transformer
// https://github.com/kristerkari/react-native-svg-transformer -> DOCS
import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';

export function Home() {

    const navigation = useNavigation();
    
    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
    }

    function handleCarDetails() {
        navigation.navigate('CarDetails');
    }

    return(
        <Container>

            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent // começa do começo do status bar 
            />

            <Header>
                <HeaderContent>

                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>

                </HeaderContent>
            </Header>

            <CarList 
                data={[1,2,3, 4, 5, 6,7, ]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
            />

        </Container>
    );
}