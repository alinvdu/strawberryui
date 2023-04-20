import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import strawberryBg from './strawberry-bg.jpg';
import SvgPlayButton from './SvgPlayButton';
import Button, { Rectangle, VARIANTS } from '../buttons/PrimaryButton';
import PlayIcon from '../icons/svgs/PlayIcon';
import NextIcon from '../icons/svgs/NextIcon';
import PrevIcon from '../icons/svgs/PrevIcon';

const Wrapper = styled.div`
  width: 350px;
  height: 405px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
	position: relative;
	height: 328px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	box-sizing: border-box;
	margin-left: 2px;
	margin-right: 2px;
	background: linear-gradient(180.63deg, rgba(4, 18, 22, 0.66) 0.55%, rgba(14, 51, 68, 0.15) 30.4%),
	linear-gradient(143.96deg, rgba(6, 102, 136, 0.74) 3.94%, rgba(0, 0, 0, 0) 31.47%),
	linear-gradient(230.13deg, rgba(15, 80, 103, 0.84) 4%, rgba(0, 0, 0, 0) 41.91%),
	radial-gradient(48.17% 48.17% at 50% 50%, rgba(6, 20, 33, 0) 68.75%, #020D16 100%), url('${strawberryBg}');
	background-size: 350px;

	&::after {
		position: absolute;
		top: -2px; bottom: -2px;
		left: -2px; right: -2px;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		background: conic-gradient(from 187deg at 51% 52%,#05131E 47deg,#343BB1 71deg,#7d7ec8 143deg,#05161D 182deg,#05161D 179deg,#05161D 194deg,#7d7ec8 235deg,#1E3186 281.25deg,#05131E 303deg);
		content: '';
		z-index: -1;
	}
`;

const TitleAlbumWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.span`
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 500;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;
	margin-bottom: 5px;
`;

const Author = styled.span`
  	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-top: 5px;
`;

const Album = styled.span`
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 200;
	font-size: 15px;
	line-height: 19px;
	color: rgba(255, 255, 255, 0.8);

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const BottomSection = styled.div`
  background: linear-gradient(#102131, #030714);
  position: relative;
  height: 80px;
  box-sizing: border-box;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background: radial-gradient(114.15% 66.67% at 50% 95.06%, rgba(70, 24, 24, 0.5) 0%, rgba(45, 8, 8, 0) 100%), linear-gradient(180deg, rgba(155, 173, 174, 0.198) 0%, rgba(0, 0, 0, 0) 13.58%), linear-gradient(180deg, #102131 0%, #030714 100%);
  margin-bottom: 2px;
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    top: 0px; bottom: -2px;
    left: -2px; right: -2px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background: conic-gradient(from 183deg at 60% 21%,rgba(95,52,76,0.1) 33deg,#612E41 71.3deg,#0B182D 82deg,rgba(12,25,40,1) 88deg,rgba(155,173,174,0.168) 91.5deg,rgba(87,48,70,0) 118.88deg,rgba(155,173,174,0.198) 257deg,rgba(12,25,40,1) 267deg,#0B182E 277.87deg,#612E44 284.48deg,rgba(0,0,0,0.0) 312deg);
    content: '';
    z-index: -1;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

const MusicWidget = ({ title, author, album, onPause, onPlay, onNext, onPrevious }) => {
	const [playing, setPlaying] = useState(true);

	const handlePlayPauseClick = () => {
		const newState = !playing;
		setPlaying(newState);
		if (newState) {
			onPlay();
		} else {
			onPause();
		}
	};

	return (
		<Wrapper>
			<TopSection>
				<Author>{author}</Author>
				<TitleAlbumWrapper>
					<Title>{title}</Title>
					<Album title={album}>{album}</Album>
				</TitleAlbumWrapper>
			</TopSection>
			<BottomSection>
				<StyledButton onClick={onPrevious}><Button icon={<PrevIcon />} variant={VARIANTS.BLUE} /></StyledButton>
				<StyledButton onClick={handlePlayPauseClick}>{playing ? <Button icon={<Rectangle />} /> : <Button icon={<PlayIcon />} />}</StyledButton>
				<StyledButton onClick={onNext}><Button icon={<NextIcon />} /></StyledButton>
			</BottomSection>
		</Wrapper>
	);
};

MusicWidget.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	album: PropTypes.string.isRequired,
	onPause: PropTypes.func.isRequired,
	onPlay: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrevious: PropTypes.func.isRequired,
};

export default MusicWidget;
