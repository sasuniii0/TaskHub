import { Text, View, TextInput, Pressable, ScrollView } from "react-native";

const TasksForm = () => {
  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-6 text-center pt-12">
        Add New Task
      </Text>

      {/* Task Title Input */}
      <Text className="text-gray-700 mb-2">Task Title</Text>
      <TextInput
        placeholder="Enter task title"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white text-gray-800"
      />

      {/* Task Description Input */}
      <Text className="text-gray-700 mb-2">Description</Text>
      <TextInput
        placeholder="Enter task description"
        multiline
        numberOfLines={4}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 bg-white text-gray-800"
      />

      {/* Save Button */}
      <Pressable className="bg-black py-3 rounded-xl mb-4 active:opacity-80">
        <Text className="text-white text-center font-semibold text-lg">
          Save Task
        </Text>
      </Pressable>

    </View>
  );
};

export default TasksForm;
