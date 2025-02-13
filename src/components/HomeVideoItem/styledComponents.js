import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  @media (min-width: 576px) {
    width: 48%;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    width: 32%;
  }
`
export const VideoItemContainer = styled.li`
  width: 100%;
  margin: 16px 0 0 0;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  cursor: pointer;
`
export const VideoDetailsContainer = styled.div`
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  @media (min-width: 576px) {
    padding: 10px 0px;
  }
`
export const ChannelLogo = styled.img`
  width: 50px;
  margin-top: 12px;
  margin-right: 12px;
`
export const VideoTitleAndDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`
export const VideoTitle = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0 0 10px 0;
  line-height: 1.5;
  @media (min-width: 576px) {
    font-size: 15px;
  }
`
export const ChannelNameDurationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelNameContainer = styled.div``

export const ChannelDescriptionText = styled.p`
  color: #64748b;
  font-size: 18px;
  font-family: 'roboto';
  margin: 0px;
  @media (min-width: 576px) {
    font-size: 14px;
  }
`

export const Dot = styled.span`
  display: flex;
  align-self: center;
  font-size: 40px;
  font-weight: bold;
  color: #64748b;
  @media (min-width: 576px) {
    font-size: 30px;
  }
`
export const Dot1 = styled(Dot)`
  @media (min-width: 576px) {
    display: none;
  }
`

export const ViewsDurationContainer = styled.div`
  display: flex;
  align-items: center;
`