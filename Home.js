import React, { Component } from "react";
import { Modal, Alert, StyleSheet, Text, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, ScrollView} from 'react-native';
import { Badge, Toast, Footer, FooterTab, Root, Subtitle, Icon, Card, CardItem, Right, Left, Container, Button, Body, Header, Content, Form, Textarea, Item, Input, List, Title, ListItem } from 'native-base';
import Swiper from 'react-native-swiper';

const datas = [
    {
      route: "Home",
      text: "My Home"
    },
    {
      route: "Allbout",
      text: "My Allbout"
    }, 
];

picList=[
  './colorsh4a.jpg',
  './colorsh2.jpg',
  './colorsh7.jpg',
  './colorsh4a.jpg',
]

const Slide = props => {
  return (<View style={styles.slide}>    
    
    {
      !props.loaded && <View style={styles.loadingView}>
      <ScrollView
          showsHorizontalScrollIndicator={false} 
          horizontal={true}
          indicatorStyle='white'>

          <Image style={styles.loadingImage} source={require('./paint.jpg')} />
          <Image style={styles.loadingImage} source={require('./shop51.jpeg')} />
          <Image style={styles.loadingImage} source={require('./shop4.jpeg')} />
          <Image style={styles.loadingImage} source={require('./shop61.jpeg')} />
          <Image style={styles.loadingImage} source={require('./shop31.jpeg')} />
 
      </ScrollView>
       
        </View>
    }
  </View>)
}

export default class App extends React.Component {

  constructor(props) {
    super(props)

        this.state = { 
            Alert_Visibility: false 
        };

        this.state = {
            picList: [
                './shirts15.png',
                './shirts15.png',
                './shop6a.jpeg',
                './shirts15.png',
                './shop4.jpeg',
                ],
                loadQueue: [0, 0, 0, 0, 0, ]
              }
            this.loadHandle = this.loadHandle.bind(this)
      }

      loadHandle (i) { 
        let loadQueue = this.state.loadQueue
        loadQueue[i] = 1
        this.setState({
          loadQueue
        })
      }

    static navigationOptions = {
        title: 'Allbout',
      };

  state={
    isReady: false
  }
 
  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
  });
  this.setState({isReady:true})
}


  render() {
    const { navigate } = this.props.navigation;

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
        
        <Container style={styles.Container}>
            <Header style={styles.header}>
                <Left>
                        <Button style={styles.HButton}
                            
                            transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon 
                                name="ios-menu">
                            </Icon>
                        </Button>
                </Left>
                <Body>
                    <Title style={styles.headerText}>Foodsta Category</Title>
                </Body>

                <Right>
              
                    <Button 
                      style={styles.HButton}            
                      transparent>
                        <Icon name='ios-search' /> 
                    </Button>
                    
                    <Button
                      style={styles.HButton}
                      transparent>
                        <Icon name='ios-folder' /> 
                    </Button>
                      
                    </Right>
                      
            </Header>
            
            <Content>
              <View style={styles.viewMe}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                    <Content marginTop={-5}>
                  
                      <View style={{flex: 1, height: 210, justifyContent: "center"}}>          
                          <Swiper loadMinimal loadMinimalSize={3} style={styles.wrapper} loop={false}>
                              {  
                              this.state.picList.map((item, i) => <Slide
                                  loadHandle={this.loadHandle}
                                  loaded={!!this.state.loadQueue[i]}
                                  uri={item}
                                  i={i}
                                  key={i} />)
                              }
                          </Swiper>
                      </View>

                      <View>
                           
                        <ScrollView
                              showsHorizontalScrollIndicator={false} 
                              horizontal={true}
                              indicatorStyle='white'>

                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}
                                      >
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop51.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Vegetables </Text>
                                              </Body>

                                          </CardItem>                               
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                        
                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}>
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop61.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>                                          

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Fruits</Text>
                                              </Body>

                                          </CardItem>                                   
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                           
                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}>
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop31.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Fishery</Text>
                                              </Body>

                                          </CardItem>                                        
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                        
                        </ScrollView>

                        <ScrollView
                              showsHorizontalScrollIndicator={false} 
                              horizontal={true}
                              indicatorStyle='white'>

                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}
                                      >
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop51.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Vegetables </Text>
                                              </Body>

                                          </CardItem>                               
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                        
                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}>
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop61.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>                                          

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Fruits</Text>
                                              </Body>

                                          </CardItem>                                   
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                           
                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}>
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop31.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Fishery</Text>
                                              </Body>

                                          </CardItem>                                        
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                        
                        </ScrollView>

                        <ScrollView
                              showsHorizontalScrollIndicator={false} 
                              horizontal={true}
                              indicatorStyle='white'>

                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}
                                      >
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop51.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Vegetables </Text>
                                              </Body>

                                          </CardItem>                               
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                        
                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}>
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop61.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>                                          

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Fruits</Text>
                                              </Body>

                                          </CardItem>                                   
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                           
                          <TouchableWithoutFeedback>
                          
                                      <Card style={styles.Card}
                                      width={113}
                                      marginLeft={5}
                                      marginTop={5}>
                                                                                                          
                                          <CardItem transparent
                                          style={styles.CardItem}
                                          backgroundColor='#eee'>                                

                                          <Body>
                                              <ImageBackground 
                                                  source={require('./shop31.jpeg')} 
                                                  style={{width: 143, height: 125, marginLeft: -18,  flex: 1,
                                                  marginTop: -12
                                                  }}>
                                                  
                                              </ImageBackground>                                    
                                          </Body>
                                  
                                          </CardItem>

                                          <CardItem style={styles.CardItem}
                                              backgroundColor='#CC0099'     
                                      
                                              width= {173}
                                              height={48}
                                              padding={10}
                                              marginLeft={-2}
                                              marginTop={-20}>

                                              <Body>
                                                  <Text style={styles.myitem}>Fishery</Text>
                                              </Body>

                                          </CardItem>                                        
                                      
                                  </Card>
                              </TouchableWithoutFeedback>
                        
                        </ScrollView>
                      </View>

                    </Content>

                </ScrollView>
            
              </View>
          
      </Content>
        
    </Container>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#ddd',
    },
    wrapper: {
        backgroundColor: '#fff',
        paddingTop: 10
      },
    loadingView: {     
      
    },
    loadingImage: {
        width: 380,
        height: 192,
        marginTop: 1,
        backgroundColor: '#eee'
      },
    slide: {
      flex: 1,
      height: 20,
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginTop: -10
      
    },

    viewMe:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
         
  },
    footerText:{
    fontFamily: 'serif',
    fontSize: 15,
    paddingTop: 10,
    padding: 10,
    color: "#fff",
    fontStyle: 'italic',

  },
    headerText:{
        fontSize: 15,
        paddingTop: 10,
        padding: 10,
        marginLeft: 3,
        marginTop: 40,
        
        fontStyle: 'normal',
    
      },

      HButton:{        
        paddingTop: 10,
        padding: 10,
        marginTop: 35,
        
    
      },
      mona: {
        textAlign: 'right',   
        fontWeight: 'bold',
        fontSize: 15,
        color:'#000',
        fontFamily:'serif',
    },

      header: {
        backgroundColor: 'green',
        paddingVertical: 20,
        alignItems: 'center',
        alignContent: 'center',
    },

    formMe: {
        width: 320,
        height: 220,
        fontSize: 20, 
        marginTop: -5,
    },

    listText: {
        fontSize: 15,
        color:'#841584',
        fontWeight: "bold",
        fontStyle:"normal"          
                                      
    },

    itemText: {
        fontSize: 15,
        color:'#333333',
        fontWeight: "bold",
        fontStyle:"normal"          
                                      
    },

    myitem: {
        fontSize: 15,
        color:'#fff',
        fontWeight: "bold",
        fontStyle:"normal"          
                                      
    },

    Alert_Main_View:{
      
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#fff", 
        height: 350 ,
        width: '90%',
        borderColor: '#fff',
        borderRadius:10,
       
      },
       
      Alert_Title:{
       
        fontSize: 20, 
        color: "#333333",
        textAlign: 'center',
        marginTop: 50,
        height: '15%'
       
      },
       
      Alert_Message:{
       
          fontSize: 15, 
          color: "#333333",
          textAlign: 'center',
          padding: 10,
          height: '42%'
          
        },
       
      buttonStyle: {
          
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
       
      },
         
      TextStyle:{
          color:'blue',
          textAlign:'center',
          fontSize: 20,
          marginBottom: 40
      }
        
  });

  