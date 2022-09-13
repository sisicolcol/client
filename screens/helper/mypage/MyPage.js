import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PageInfo from "../../../components/common/PageInfo";
import { colors, shadowView } from "../../../theme";

const Category = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={colors.smallTextGray2}
      />
    </TouchableOpacity>
  );
};

const MyPage = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={styles.pageInfoView}>
        <PageInfo
          isBold={false}
          colorTitle=""
          title={"나는 활동지원사\n입니다."}
        />
      </View>
      <View style={{ width: "90%" }}>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.editTouchableOpacity}>
            <MaterialCommunityIcons
              name="pencil"
              size={20}
              color={colors.buttonGray3}
            />
            <Text style={styles.editText}>프로필수정</Text>
          </TouchableOpacity>
        </View>
        <View style={[shadowView, styles.userInfoView]}>
          <View>
            <Text style={styles.userInfoTitleText}>아이디</Text>
            <Text style={styles.userInfoDataText}>id</Text>
          </View>
          <View>
            <Text style={styles.userInfoTitleText}>성별</Text>
            <Text style={styles.userInfoDataText}>성별</Text>
          </View>
          <View>
            <Text style={styles.userInfoTitleText}>생년월일</Text>
            <Text style={styles.userInfoDataText}>010101</Text>
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={styles.editTouchableOpacity}
              onPress={() => navigation.navigate("IntroDetail")}
            >
              <Text style={{ fontSize: 16, marginRight: 5 }}>자기소개서</Text>
              <MaterialCommunityIcons
                name="pencil"
                size={20}
                color={colors.buttonGray3}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            shadowView,
            {
              width: "100%",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginBottom: 30,
            },
          ]}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            {/* <Text style={styles.titleText}>제목</Text> */}
            <Text style={styles.descriptionText}>내용</Text>
          </View>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <Text style={{ color: colors.smallTextGray2 }}>
              2022.10.28에 작성
            </Text>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Category title="비밀번호 변경" />
          <Category title="고객센터" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageInfoView: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  userInfoView: {
    width: "100%",
    padding: 20,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  userInfoTitleText: {
    marginBottom: 20,
    fontSize: 16,
  },
  userInfoDataText: {
    fontSize: 18,
    fontWeight: "400",
  },
  editTouchableOpacity: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  editText: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.pageTextGray1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  characterCountText: {
    fontSize: 13,
    color: colors.smallTextGray2,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 13,
  },
});

export default MyPage;
