# react-native-element-generator
Packge which could be used to generate all Kind of React-Native Components and may some usefull Subcomponents like LoadiingModals, Blinking Icons or Text. 

# Usage
These is an Example how to use the ElementGenerator in functions or in a render function itself.

```Javascript
import { genTouchableOpacityListItem} from './ElementGenerator';

render() {
    return (
        <View style={styles.container}>
            <Loader loading={this.state.loading} />
            <FlatList
                style={{flex:1, width:"100%"}}
                data={this.state.dataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

_renderItem = ({item,index}) => {
    return genTouchableOpacityListItem(this._switchToScreen,item,index,"tasks");
};
```

In the comming Versions it would be possible to generate all Components out of this Single class. 
