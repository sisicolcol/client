import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Apply,
  Chat,
  HelperList,
  ApplyList,
  ApplyDetail,
  ApplyHelper,
  CheckResume,
  Result,
} from "../screens/blind/";

const Stack = createStackNavigator();

const BlindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Group>
        <Stack.Screen name="Apply" component={Apply} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="HelperList"
          options={{ title: "지원한 활동지원사 확인하기" }}
          component={HelperList}
        />
        <Stack.Screen
          name="HelperCheckResume"
          options={{ title: "지원한 활동지원사 확인하기" }}
          component={CheckResume}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="ApplyList"
          options={{ title: "신청 활동지원서비스" }}
          component={ApplyList}
        />
        <Stack.Screen
          name="ApplyDetail"
          options={{ title: "신청 활동지원서비스" }}
          component={ApplyDetail}
        />
        <Stack.Screen
          name="ApplyHelper"
          options={{ title: "신청 활동지원서비스" }}
          component={ApplyHelper}
        />
        <Stack.Screen
          name="ApplyCheckResume"
          options={{ title: "신청 활동지원서비스" }}
          component={CheckResume}
        />
        <Stack.Screen
          name="Result"
          options={{ title: "", headerLeft: () => null }}
          component={Result}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BlindStack;
