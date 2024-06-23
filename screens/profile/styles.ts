import styled from "styled-components";

export const Rounded = styled.View`
  position: absolute;
  bottom: 0;
  height: 80%;
  width: 100%;
  background-color: #E6EEFA;
  border-radius: 50px 50px 0 0;
`;

export const Body = styled.View`
  padding: 10px 58px;
  gap: 10px;
  text-align: center;
  font-size: 13px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FollowContainer = styled.View`
  gap: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  font-size: 15px;
  align-self: center;
`;

export const PictureFrame = styled.View`
  border-radius: 100%;
  background-color: #5790DF;
  height: 100px;
  width: 100px;
  position: relative;
  top: -50px;
`;

export const Description = styled.Text`
  color: #6C7A9C;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #5790DF;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
`;

export const Navigator = styled.View`
  padding: 0 56px;
  margin-top: 20px;
`;

export const ImagesContainer = styled.ScrollView`
  background-color: #FFFFFF;
  border-radius: 50px 50px 0 0;
  flex-grow: 1;
  gap: 10px;
  border: #FFFFFF 10px;
`;

export const ImageGrid = styled.View`
  border-radius: 50px;
  gap: 10px;
  overflow: hidden;
`;

export const ImageRow = styled.View`
  flex-direction: row;
  gap: 10px;
  height: 200px;
`;

export const Image = styled.View`
  flex-grow: 1;
  background-color: #A599CA;
`;

export const SideImages = styled.View`
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 40%;
`;
