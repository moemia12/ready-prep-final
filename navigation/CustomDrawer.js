import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import MainLayout from '../screens/MainLayout'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'

const Drawer = createDrawerNavigator()


//Hamburger Menu
const CustomDrawer = () =>{
    return (
        <View 
        style={{
            flex: 1,
            backgroundColor: COLORS.primary
        }}>
            {/**Slider Component for hamburger menu */}
            <Drawer.Navigator 
            drawerType='slide'
            overlayColor='transparent'
            drawerStyle={{
                flex: 1,
                width: '65%',
                paddingRight: 20,
                backgroundColor: 'transparent'
            }}
            sceneContainerStyle={{
                backgroundColor: 'transparent'
            }}
            initialRouteName='MainLayout'
            >
            {/**Main Screen (Default Home screen) */}
            <Drawer.Screen name='MainLayout'>
                {props => <MainLayout {...props}/>}
            </Drawer.Screen>  

            </Drawer.Navigator>

        </View>
    )
}

export default CustomDrawer