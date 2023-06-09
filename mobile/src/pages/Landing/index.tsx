import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import landingImg from '../../assets/images/landing.png';
import styles from './styles';

//import { RectButton } from 'react-native-gesture-handler';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import GiveClasses from '../GiveClasses';
import api from '../../services/api';

//import GiveClasses from '../GiveClasses';

function Landing(){
    const navigation = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);
    
    useEffect(() => {
        api.get('connections').then(response => {
          const { total } = response.data;
    
          setTotalConnections(total);
        })
      }, []);

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses');
      }

      function handleNavigateToStudyPage() {
        navigation.navigate('Study');
      } 

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo,{'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {''}
                <Image source={heartIcon}/>
            </Text>    
        </View>
    );
}

export default Landing;