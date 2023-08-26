import {Image, TouchableOpacity, View} from 'react-native';
import {css} from '@emotion/native';

import {IMG_BEE} from '../src/icons';
import MyTouch from '../src/uis/MyTouch';

export default function Index(): JSX.Element {
  return (
    <View
      style={css`
        flex: 1;
        align-self: stretch;
        flex-direction: row;
        background-color: yellow;
      `}
    >
      <MyTouch />
      <Image
        source={IMG_BEE}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          borderRadius: 50,
        }}
      />

      <View
        style={css`
          flex: 1;
          align-self: stretch;
          flex-direction: row;
          background-color: yellow;
        `}
      >
        <View
          style={css`
            position: absolute;
            top: 80px;
            right: 50px;
          `}
        >
          <View
            style={css`
              width: 50px;
              height: 50px;
              background-color: magenta;
            `}
          />
          <View
            style={css`
              width: 50px;
              height: 50px;
              background-color: purple;
            `}
          />
        </View>
      </View>
    </View>
  );
}
