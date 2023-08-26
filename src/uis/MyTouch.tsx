import {Image, TouchableOpacity, View} from 'react-native';
import {css} from '@emotion/react';

export default function MyTouch(): JSX.Element {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          borderRadius: 50,
        }}
        onPress={() => console.log('press')}
      >
        <Image
          source={{
            uri: 'https://images.ctfassets.net/sfnkq8lmu5d7/7oZxV67zss1p11WN17Ttjj/e0a7f7d681d8614175d804aa21cae732/The-Wildest_Editorial_Peeved-Pups_Hero_v01.jpg',
          }}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
