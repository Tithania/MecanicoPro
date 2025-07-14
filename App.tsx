// App.tsx
import { Ionicons } from '@expo/vector-icons'; // Para ícones
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AgendaScreen from './src/screens/AgendaScreen';
import ClientsScreen from './src/screens/ClientScreen';
import HomeScreen from './src/screens/HomeScreen';
import ReportsScreen from './src/screens/ReportScreen';
import StockScreen from './src/screens/StockScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // *** AQUI ESTÁ A CHAVE PARA O TYPESCRIPT:
            // 1. Tipagem explícita para 'iconName' como sendo uma chave válida de Ionicons.glyphMap.
            // 2. Adicionar o "else" para garantir que iconName SEMPRE terá um valor.
            let iconName: keyof typeof Ionicons.glyphMap; 

            // Definir ícones baseados na rota
            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Clientes') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Agenda') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Estoque') {
              iconName = focused ? 'cube' : 'cube-outline';
            } else if (route.name === 'Relatórios') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else {
                // FALLBACK: Se por algum motivo o 'route.name' não corresponder, 
                // garantimos que 'iconName' tenha um valor válido (ex: um ícone de ajuda).
                iconName = 'help-circle-outline'; 
            }

            // Agora, TypeScript sabe que 'iconName' é garantidamente uma string válida para Ionicons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff', // Cor do ícone e texto ativo
          tabBarInactiveTintColor: 'gray', // Cor do ícone e texto inativo
          tabBarStyle: {
            // Estilo da barra de abas
            height: 60, // Altura da barra de abas
            paddingBottom: 5, // Espaçamento inferior
            paddingTop: 5, // Espaçamento superior
          },
          tabBarLabelStyle: {
            fontSize: 12, // Tamanho da fonte do texto da aba
          },
          headerShown: false, // Oculta o cabeçalho padrão das telas
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Clientes" component={ClientsScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen name="Estoque" component={StockScreen} />
        <Tab.Screen name="Relatórios" component={ReportsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}