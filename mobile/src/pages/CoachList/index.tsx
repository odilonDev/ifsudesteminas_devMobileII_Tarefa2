import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../componentes/PageHeader';
import CoachItem, { Coach } from '../../componentes/CoachItem';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


function CoachList() {
    const [coaches, setCoaches] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
          if (response) {
            const favoritedCoaches = JSON.parse(response);
            const favoritedCoachesIds = favoritedCoaches.map((coach: Coach) => {
              return coach.id;
            });
    
            setFavorites(favoritedCoachesIds);
          }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
      }

    async function handleFiltersSubmit(){
        loadFavorites();
        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time,
            }    
        });

        setIsFiltersVisible(false);
        setCoaches(response.data);
    }

    return (
        <View style={styles.container}> 
            <PageHeader  title='Coaches disponíveis' 
                         headerRight={<TouchableOpacity onPress={handleToggleFiltersVisible}>
                                        <Feather name="filter" size={20} color="#fff"></Feather>
                                     </TouchableOpacity>}>

                { isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholder="Qual horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </TouchableOpacity>
                </View>   
                 ) }
            </PageHeader> 
            <ScrollView 
                style={styles.coachList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:4,
                }}
            >
                {coaches.map((coach: Coach) => {
                return (
                  <CoachItem 
                    key={coach.id} 
                    coach={coach}
                    favorited={favorites.includes(coach.id)}
                    
                  />
                );
              })}        
            </ScrollView>  
        </View>
    );
}

export default CoachList;