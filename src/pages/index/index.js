import Taro, { Component, useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';

@connect(({ index, loading }) => ({ ...index, ...loading }))
class Index extends Component {
  static options = {
    addGlobalClass: true
  }

  config = {
    "navigationBarTitleText": "Tarojs Demo",
    "backgroundColor": "#160F2E",
    "navigationBarBackgroundColor": "#160F2E",
    "navigationBarTextStyle": "white",
    "disableScroll": true
  }

  componentDidMount () {

  }

  navigationInfo () {
    Taro.navigateTo({
      url: '/pages/info/index'
    })
  }

  render (props) {
    // const { loading } = props

    useEffect(() => {
      console.log(props)
    }, [])

    return (
      <View className='my-page'>
        <Text className='hello' onClick={this.navigationInfo}>Hello World</Text>
      </View>
    )
  }
}

export default Index;
