import React from 'react';
import {Item, Label, Input, Form} from 'native-base';
import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
const DefultInput = props => (
  <Form>
    <Item stackedLabel style={{...styles.input, ...props.style}}>
      <Label style={{color: '#000'}}>{props.hintText}</Label>
      <Input
        secureTextEntry={props.secureText}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </Item>
  </Form>
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 7,
  },
});
export default DefultInput;
