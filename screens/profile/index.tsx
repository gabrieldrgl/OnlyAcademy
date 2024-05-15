import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Body, Bold, Button, ButtonText, Description, FollowContainer, ImagesContainer, Navigator, PictureFrame, Rounded, Row } from './styles';

export default function Profile() {
  return (
      <>
        <Rounded>
          <Body>
            <Row>
              <FollowContainer>
                <Bold>1K</Bold>
                <Text>Followers</Text>
              </FollowContainer>

              <PictureFrame></PictureFrame>

              <FollowContainer>
                <Bold>342</Bold>
                <Text>Following</Text>
              </FollowContainer>
            </Row>

            <Bold>@Catherine13</Bold>
            <Description>My name is Catherine. I like dancing in the rain and travelling all around the world.</Description>

            <Row>
              <Button><ButtonText>Follow</ButtonText></Button>
              <Button><ButtonText>Message</ButtonText></Button>
            </Row>

            <Navigator>
              <Row>
                <Text>All</Text>
                <Text>Photos</Text>
                <Text>Videos</Text>
              </Row>
            </Navigator>

            <ImagesContainer><Text>aaaaaaaaa</Text></ImagesContainer>
          </Body>
        </Rounded>
      </>
  );
}
