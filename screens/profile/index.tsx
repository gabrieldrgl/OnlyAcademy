import { Text } from 'react-native';
import { Body, Bold, Button, ButtonText, Description, FollowContainer, Image, ImageGrid, ImageRow, ImagesContainer, Navigator, PictureFrame, Rounded, Row, SideImages } from './styles';

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

          </Body>
          <ImagesContainer>
            <ImageGrid>
              <ImageRow>
                <Image/>
                <SideImages>
                  <Image/>
                  <Image/>
                </SideImages>
              </ImageRow>
              <ImageRow>
                <Image/>
                <Image/>
                <Image/>
              </ImageRow>
              <ImageRow>
                <Image/>
                <Image/>
                <Image/>
              </ImageRow>
            </ImageGrid>
          </ImagesContainer>
        </Rounded>
      </>
  );
}
