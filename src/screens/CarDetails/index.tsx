import React from 'react';

import { useNavigation } from '@react-navigation/core';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';


import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';

export function CarDetails() {

    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate('Scheduling');
    }

    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlider 
                    imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} 
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 pessoas" icon={peopleSvg} />
                </Accessories>

                <About>
                    Este ?? um autom??vel desportivo. Surgiu do lend??rio touro de lide indultado
                    na pra??a Real Maestranza de Sevilla. ?? um bel??ssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button title="Escolher per??odo do aluguel" onPress={handleConfirmRental} />
            </Footer>

        </Container>
    );
}