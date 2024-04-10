import {Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
  <SafeAreaView className = "flex flex-1 bg-[#39a5db]">
  <View className = "mx-6 mt-10 space-y-5">
    <View className = "space-y-3">
      <Text className= " text-white text-[34px] font-[800]">Online Learning</Text>
      <Text className = "text-white text-[21px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    </View>
    <View>
    <Image source= {require("./assets/home.png")} 
    style= {{
height: 461,
top:100,
left: -16
}}/>
    </View>
  </View>
  </SafeAreaView>
    
  )
};
