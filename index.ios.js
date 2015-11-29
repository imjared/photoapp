const React = require('react-native');
const { AppRegistry, StyleSheet, Text, View, Image } = React;

import DraggableImage from './components/DraggableImage.js';

var photoapp = React.createClass({
    
    render: function() {

        return (
            <View style={ styles.container }>
                <View style={ styles.imageContainer }>
                    <Image
                        style={ styles.img }
                        resizeMode='contain'
                        source={{ uri: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg' }}
                    />
                </View>
                <DraggableImage />
            </View>
        );
    }

});

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
        position: 'relative',
        alignItems: 'stretch'
    },
    imageContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        position: 'relative',
        alignItems: 'stretch'
    },
    secondaryView: {
        backgroundColor: 'red',
    },
    img: {
        backgroundColor: 'transparent',
        flex: 1
    }
});

AppRegistry.registerComponent('photoapp', () => photoapp);
