// In App.js in a new project

import React from 'react';
import { SafeAreaView, Text , Button} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/views/Home';
import MyScreen from './src/views/My';
import ClassifyScreen from './src/views/Classify';
import CartScreen from './src/views/Cart';

// class DetailsScreen extends React.Component {
//   static navigationOptions = ({navigation}) => {
//     const {params} = navigation.state;
//     return {
//       title: params ? params.otherParam : 'detail test',
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerRight: (
//         <Button
//           onPress={() => alert('This is a button!')}
//           title="Info"
//           color="#fff"
//         />
//       ),
//     }
//   };
//   render() {
//     const {navigate,state} = this.props.navigation;
//     // const {itemId, otherParam} = state.params;
//     const itemId = state.params ? state.params.itemId : null;
//     const otherParam = state.params ? state.params.otherParam : null;
//     return (
//       <SafeAreaView >
//         <Text >
//           This is top text.
//         </Text>
//         <Text >
//           This is bottom text.
//         </Text>
//       </SafeAreaView>
//     );
//   }
// }

const RootStack  =  TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Classify: {
    screen: ClassifyScreen,
  },
  Cart: {
    screen: CartScreen,
  },
  My: {
    screen: MyScreen
  },
},
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Cart') {
          iconName = `ios-cart`;
        } else if (routeName === 'Classify') {
          iconName = `ios-reorder`;
        } else if (routeName === 'My') {
          iconName = `ios-person`;
        }
        if (!focused) {
          iconName += '-outline';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#4ac600',
      inactiveTintColor: '#666',
      style: {
        backgroundColor: '#313131',
      },
      labelStyle: {
        fontSize: 16,
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

