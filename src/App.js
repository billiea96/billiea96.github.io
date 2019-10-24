import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Feed, Grid, Segment, Table, Search, Menu, List, Label, Icon, Comment, Form, Header, Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return(
      <div>
      <Grid textAlign="center" columns={1}>
          <Grid.Column width={12}>
            <Table celled stackable selectable striped>
              <Table.Header>
                <Table.Row textAlign="right">
                  <Table.HeaderCell colSpan="2"><Search placeholder="Search Document...." /></Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Nama Dokumen</Table.HeaderCell>
                  <Table.HeaderCell>Jenis File</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="left">
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="left">
                    Panduan Belajar CSS
                  </Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="left">
                    Panduan Belajar React JS
                  </Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
            <br/>
            <Grid columns={3} stackable>
              <Grid.Column width={6} textAlign="left">
                  <Comment.Group>
                    <Header as="h3" textAlign="left" dividing>
                      Komentar
                    </Header>

                    <Comment>
                      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                      <Comment.Content>
                        <Comment.Author as="a">Satria</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5.42 PM</div>
                        </Comment.Metadata>
                        <Comment.Text>Hello..!</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                      <Comment.Content>
                        <Comment.Author as="a">Danang</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5.50PM</div>
                        </Comment.Metadata>
                        <Comment.Text>Kerjakan sesuatu semampu kamu..</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                      <Comment.Group>
                        <Comment>
                          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                          <Comment.Content>
                            <Comment.Author as="a">Ricky</Comment.Author>
                            <Comment.Metadata>Just now</Comment.Metadata>
                            <Comment.Text>Kamu sekarang dimana danang</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                      <Comment.Content>
                        <Comment.Author as="a">Joe</Comment.Author>
                        <Comment.Metadata>1 days ago</Comment.Metadata>
                        <Comment.Text>Terima kasih atas nasihatnya</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Form reply>
                      <Form.TextArea />
                      <Button content="Add reply" icon="edit" labelPosition="left" primary/>
                    </Form>
                  </Comment.Group>
              </Grid.Column>

              <Grid.Column width={4}>

              </Grid.Column>

              <Grid.Column width={6}>
                  <Feed>
                    <Feed.Event>
                      <Feed.Label>
                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                      </Feed.Label>
                      <Feed.Content>
                        <Feed.Summary>
                          <Feed.User>Anton</Feed.User> added you as friend.
                          <Feed.Date>3 Hour Ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                          <Feed.Like>
                            <Icon name="like" /> 4 likes
                          </Feed.Like>
                        </Feed.Meta>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Label icon="pencil"/>
                      <Feed.Content>
                        <Feed.Summary>
                          You submitted a new post to the page
                          <Feed.Date>3 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra>
                          Saya senang belajar bahasa pemrograman
                        </Feed.Extra>
                        <Feed.Meta>
                          <Feed.Like>11 likes</Feed.Like>
                        </Feed.Meta>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                      <Feed.Content>
                        <Feed.Date>4 days ago</Feed.Date>
                        <Feed.Summary>David add 2 new images</Feed.Summary>
                        <Feed.Extra images>
                          <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
                          <img src="https://franciscohodge.com/wp-content/uploads/2018/12/icon-reactjs.png" />
                        </Feed.Extra>
                        <Feed.Meta>
                          <Feed.Like><Icon name="like" />2 likes</Feed.Like>
                        </Feed.Meta>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
              </Grid.Column>
            </Grid>
          </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default App;
