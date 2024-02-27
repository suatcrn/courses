import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CoursInput from "./components/CoursInput";

export default function App() {
  const [modallsVisible, setModallsVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModallsVisible(true);
  };

  const endModal = () => {
    setModallsVisible(false);
  };

  const addCourse = (courseTitle) => {
    setCourses((currentCourses) =>
      courseTitle.length !== 0
        ? [
            ...currentCourses,
            { text: courseTitle, id: Math.random().toString() },
          ]
        : [...currentCourses]
    );
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Course-Add" color="red" onPress={startModal} />
        <CoursInput
          visible={modallsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  courseItem: {
    backgroundColor: "gray",
    margin: 8,
    borderRadius: 5,
  },
  courseText: {
    padding: 8,
    color: "white",
  },
});
