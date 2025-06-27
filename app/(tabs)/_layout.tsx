import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor: '#000',
                borderTopColor: '#000',
                borderTopWidth: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 60,
                borderRadius: 10,
                margin: 10, 
            },
headerBackground: 
() => <div style={{ backgroundColor: '#000', height: '100%' }} />,
           
headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
            },
            headerStyle: {
                backgroundColor: '#000',
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#888',
            tabBarLabelStyle: {
                fontSize: 12,
                marginBottom: 5,
            },
            tabBarIconStyle: {
                marginBottom: 5,
            },
        
          
       
        }}>
        
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                  }}
               
            />
        

            <Tabs.Screen
                name="travels"
                options={{
                    title: 'Caronas',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="map" color={color} />,
                  }}
                
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Meu Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                  }}
                
            />
        </Tabs>
    );
}
