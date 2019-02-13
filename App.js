import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { Root } from "native-base";
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render(){
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
  
    return (
      <Container>
        <Header />
        <Content>
        <Text>
        Fill in the mandatory fields, and click invite. User gets email invitation sent to the email id mentioned. Once the invitation is accepted, the user becomes part of the organization. 
        </Text>
          <Form>
            <Item floatingLabel>
              <Label>* Employee ID</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>* First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>* Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>* Email Address</Label>
              <Input />
            </Item>
            
            <Button rounded success>
            <Text>Invite</Text>
          </Button>
          
          </Form>
        </Content>
      </Container>
    );
  }
}

