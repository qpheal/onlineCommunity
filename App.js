import { Text, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import CourseCard from "./src/components/courseCard";

export default function App() {
  return (
    <View className="flex flex-1 bg-[#fff] mx-5">
      {/**HEader */}
      <View className="flex-row justify-between item-center">
        <Text className="text-[18px] font-[700] text-[#4E35EA]">
          Hello, Rusdi
        </Text>
        <View className="flex-row space-x-2">
          <AntDesign name="search1" size={24} color="black" />
          <Feather name="user" size={24} color="black" />
        </View>
      </View>

      <View className="mt-[35px]">
        <Text className="text-[23px] font-[700] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>

      <View>
        <CourseCard />
      </View>

      
    </View>
  );
}

