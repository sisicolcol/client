import React from "react";
import { View, TextInput } from "react-native";
import { colors } from "../../theme";

const UselessTextInput = (props) => {
  return <TextInput {...props} editable maxLength={200} />;
};

const MultiLineinput = ({ originValue, setText, accessibility }) => {
  const [value, setValue] = React.useState(originValue);

  return (
    <View
      style={{
        borderRadius: 12,
        borderColor: colors.mainBlue,
        borderWidth: 1,
        marginTop: 24,
        marginBottom: 16,
      }}
    >
      <UselessTextInput
        accessibilityLabel={accessibility}
        placeholder={accessibility}
        multiline
        numberOfLines={6}
        onChangeText={(text) => {
          setText(text);
          setValue(text);
        }}
        value={value}
        style={{ padding: 10, width: "65%" }}
      />
    </View>
  );
};

export default MultiLineinput;

MultiLineinput.defaultProps = {
  accessibility: "입력 창",
};
