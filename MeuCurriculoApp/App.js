import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import SchoolScreen from "./src/screens/SchoolScreen";
import ExperienceScreen from "./src/screens/ExperienceScreen";
import ProjectsScreen from "./src/screens/ProjectsScreen";
import ProjectDetailsScreen from "./src/screens/ProjectDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="School" component={SchoolScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
