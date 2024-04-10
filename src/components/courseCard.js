import { View, Text, FlatList, Image } from "react-native";
import courseContent from "../mock/courseContent";

const CourseCard = () => {
  return (
    <View>
      <FlatList
        data={courseContent}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => (
          <View
            style={{ gap: "3px", width: 500, height: 300 }}
            className="flex flex-row "
          >
            <View
              className="bg-[#9898d7] mb-10 rounded-[3rem]"
              style={{ padding: "4px" }}
            >
              <Text>{item.title}</Text>
            </View>

            <View>
              
              <Image source={item.image} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CourseCard;
