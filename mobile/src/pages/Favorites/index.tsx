import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import CoachItem, { Coach } from '../../componentes/CoachItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
          if (response) {
            const favoritedCoaches = JSON.parse(response);
          
    
            setFavorites(favoritedCoaches);
          }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return(
         <View style={styles.container}> 
            <PageHeader title='Meus coaches favoritos'/> 
            <ScrollView 
                style={styles.coachList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:4,
                }}
            >
            {favorites.map((coach: Coach) => {
                return (
                    <CoachItem 
                        key={coach.id}
                        coach={coach}
                        favorited
                    />
                );
            })}
            </ScrollView>   
        </View>
    );
}

export default Favorites;