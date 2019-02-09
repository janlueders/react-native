import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'

class BlinkingIcon extends Component {
    
    constructor(props) {
        super(props);
        this.state = { showText: true };
        // Change the state every second or the time given by User.
        setInterval(() => {
                this.setState(previousState => {
                    return { showText: !previousState.showText };
                });
            },
            // Define blinking time in milliseconds
            1000
        );
    }
    
    render() {
        let name = this.state.showText ? this.props.iconname : ' ';
        return (
            <Icon name={name} style={{ textAlign: 'center', marginTop: 10 }} />
        );
    }
}

Blinking.propTypes = {
    iconname: PropTypes.string.isRequired
};

BlinkingIcon.defaulProps = {
    iconname: 'warning'
};

export default BlinkingIcon;
