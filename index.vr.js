import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  asset,
  Pano,
  Model,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class SpaceVR extends React.Component {
  state = {
    rotation: 90,
    zoomLevel: 0.0002,
  }

  rotate = () => {
    this.setState({
      rotation: this.state.rotation + 1,
      zoomLevel: this.state.zoomLevel + 0.00001
    })

    requestAnimationFrame(this.rotate)
  }

  componentDidMount() {
    this.rotate()
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <VrButton
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -3]}],
          }}>
          <Text>+</Text>
        </VrButton>
        <VrButton
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -3]}],
          }}>
          <Text>-</Text>
        </VrButton>
        <AmbientLight intensity={2.5} />
        <Model
          style={{
            transform: [
              {translate: [-25, 0, -70]},
              {scale: 0.05},
              {rotateY: 90},
              {rotateX: this.state.rotation},
              {rotateZ: -10},
            ]
          }}
          source={{
            obj:asset('earth.obj'),
            mtl: asset('earth.mtl'),
          }}
          lit={true}
        />
        <Model
          style={{
            transform: [
              {translate: [10, 10, -100]},
              {scale: 0.05},
            ]
          }}
          lit={true}
          source={{
            obj:asset('moon.obj'),
            mtl: asset('moon.mtl'),
          }}
        />
        <Pano source={
          {
            uri: [
              '../static_assets/space_right.png',
              '../static_assets/space_left.png',
              '../static_assets/space_up.png',
              '../static_assets/space_down.png',
              '../static_assets/space_front.png',
              '../static_assets/space_back.png',
            ]
          }
        } />
      </View>
    );
  }
};

AppRegistry.registerComponent('SpaceVR', () => SpaceVR);
