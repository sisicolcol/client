import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioButton from "../../../components/common/RadioButton";
import BottomButton from "../../../components/common/BottomButton";
import { colors, shadowView } from "../../../theme";
import { getResume, postApply } from "../../../api/api.helper";
import { getNewResume, getUserId } from "../../../components/Storage";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SelfIntro = ({ title, date, isDateVisible, onPress }) => {
  return (
    <TouchableOpacity
      style={[shadowView, { width: "100%", padding: 10, marginBottom: 20 }]}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, marginBottom: isDateVisible ? 10 : 0 }}>
        {title}
      </Text>
      <View style={{ width: "90%" }}>
        {isDateVisible ?? (
          <Text
            style={{
              fontSize: 13,
              color: colors.smallTextGray2,
              textAlign: "right",
            }}
          >
            {date} 에 작성
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const IntroSelection = ({ route, navigation }) => {
  const { applyType } = route.params; // quick || reservation
  const selectList = [
    { id: 1, name: "기존 자기소개서 선택" },
    { id: 2, name: "새로운 자기소개서 작성" },
  ];
  const [selectedData, setSelectedData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [resume, setResume] = useState("");
  const [newResume, setNewResume] = useState("");
  const [hp_id, setHp_id] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    let hp;
    const fetchData = async () => {
      hp = await getUserId()
        .then((data) => {
          setHp_id(data);
          return data;
        })
        .catch((error) => console.error(error));
      await getResume(hp)
        .then((data) => {
          if (data.isSuccess) {
            setResume(data.result.result[0]);
            setLoading(false);
          } else {
            setResume("오류가 발생했습니다. 잠시 후에 다시 시도해주세요.");
          }
        })
        .catch((error) => console.error(error));
      await getNewResume()
        .then((data) => {
          setNewResume(data);
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [navigation, isFocused]);

  const applyFunc = async () => {
    if (selectedData !== 0) {
      const { apply_id, mem_id, start_point, end_point, service_date } =
        route.params.detailData;
      let data = {
        apply_id: apply_id,
        mem_id: mem_id,
        hp_id: hp_id,
        apply_date: service_date.slice(0, 10),
        start_point: start_point,
        end_point: end_point,
      };
      if (selectedData === 1) {
        data.is_new = 0;
        data.new_idc = null;
      } else {
        const newResume = await getNewResume().catch((error) =>
          console.error(error)
        );
        data.is_new = 1;
        data.new_idc = newResume;
      }
      postApply(data)
        .then(() => {
          AsyncStorage.removeItem("NEW_IDC");
          navigation.navigate("ApplyComplete");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 120,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%" }}>
          <RadioButton
            key={selectList[0].id}
            data={selectList[0]}
            checked={selectedData === selectList[0].id ? true : false}
            onSelect={(value) => {
              setSelectedData(value);
            }}
          />
          <View style={{ marginBottom: 30 }}>
            <SelfIntro
              title={
                loading ? "로딩중..." : resume.content.slice(0, 40) + "..."
              }
              date={resume.date !== undefined && resume.date.slice(0, 10)}
              onPress={() =>
                navigation.navigate("ExistingIntroDetail", {
                  data: resume,
                })
              }
            />
          </View>
          <RadioButton
            key={selectList[1].id}
            data={selectList[1]}
            checked={selectedData === selectList[1].id ? true : false}
            onSelect={(value) => {
              setSelectedData(value);
            }}
          />
          <SelfIntro
            title={
              newResume === ""
                ? "클릭하면 작성창으로 넘어갑니다"
                : newResume.slice(0, 40) + "..."
            }
            isDateVisible={false}
            onPress={() => navigation.navigate("NewIntroDetail")}
          />
        </View>
      </KeyboardAwareScrollView>
      <BottomButton text={"지원하기"} onPress={applyFunc} />
    </View>
  );
};

export default IntroSelection;
