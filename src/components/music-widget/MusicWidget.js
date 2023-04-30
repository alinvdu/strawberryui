import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import strawberryBg from './strawberry-bg.jpg';
import strawberryBgWhite from './strawberry-bg-white.jpg';
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
	padding: 2px;
	padding-bottom: 0;
	box-sizing: border-box;
`;

const TopSectionBg = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	box-sizing: border-box;
	background: ${({ theme }) => theme === 'dark' ? `linear-gradient(180.63deg, rgba(4, 18, 22, 0.66) 0.55%, rgba(14, 51, 68, 0.15) 30.4%),
		linear-gradient(143.96deg, rgba(6, 102, 136, 0.74) 3.94%, rgba(0, 0, 0, 0) 31.47%),
		linear-gradient(230.13deg, rgba(15, 80, 103, 0.84) 4%, rgba(0, 0, 0, 0) 41.91%),
		radial-gradient(48.17% 48.17% at 50% 50%, rgba(6, 20, 33, 0) 68.75%, #020D16 100%), url('${strawberryBg}');
	` : `linear-gradient(180.63deg, rgba(177, 220, 235, 0.66) 0.55%, rgba(123, 192, 224, 0.15) 30.4%),
		linear-gradient(230.13deg, rgba(183, 236, 255, 0.84) 4%, rgba(162, 230, 255, 0.608125) 14.47%, rgba(172, 172, 172, 0) 41.91%),
		linear-gradient(143.96deg, rgba(207, 218, 222, 0.74) 3.94%, rgba(0, 0, 0, 0) 31.47%),
		radial-gradient(48.17% 48.17% at 50% 50%, rgba(255, 255, 255, 0) 68.75%, #D9D9D9 100%) , url('${strawberryBgWhite}');
	`};
	background-size: 350px;
`;

const TopSectionBorder = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	background: conic-gradient(from 166deg at 51% 52%,rgba(235,235,235,0) 81deg,rgba(163,167,238,0.09) 61deg,rgba(107,115,250,1) 151deg,rgba(166,168,248,1) 182deg,rgba(169,169,169,0) 196deg,rgba(134,154,245,1) 219deg,rgba(73,104,243,1) 235deg,rgba(74,107,254,0.03) 318deg,rgba(150,150,150,0) 303deg);
`;

const TitleAlbumWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : '#126065'};
`;

const Title = styled.span`
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 500;
	line-height: 30px;
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
	color: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.75)' : '#126065'};
	margin-top: 5px;
`;

const Album = styled.span`
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 300;
	font-size: 15px;
	line-height: 19px;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const BottomSection = styled.div`
	position: relative;
	display: flex;
	padding: 0px 2px 2px 2px;
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
`;

const BottomSectionBg = styled.div`
	position: relative;
	background: linear-gradient(#102131, #030714);
	position: relative;
	height: 80px;
	flex: 1;
	box-sizing: border-box;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	background: ${({ theme }) => theme === 'dark' ? `radial-gradient(114.15% 66.67% at 50% 95.06%, rgba(70, 24, 24, 0.5) 0%, rgba(45, 8, 8, 0) 100%), linear-gradient(180deg, rgba(155, 173, 174, 0.198) 0%, rgba(0, 0, 0, 0) 13.58%), linear-gradient(180deg, #102131 0%, #030714 100%)`:
		`linear-gradient(180deg, rgba(52, 152, 224, 0.198) 0%, rgba(76, 108, 132, 0) 13.58%), linear-gradient(180deg, #C2CACE 0%, #5BB2E2 100%), radial-gradient(114.15% 66.67% at 50% 95.06%, rgba(243, 74, 74, 0.5) 0%, rgba(45, 8, 8, 0) 100%);`};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const BottomSectionBorder = styled.div`
	position: absolute;
	top: 0px; bottom: 0px;
	left: 0px; right: 0px;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	background: ${({ theme }) => theme === 'dark' ?  `conic-gradient(from 183deg at 60% 21%,rgba(95,52,76,0.1) 33deg,#612E41 71.3deg,#0B182D 82deg,rgba(12,25,40,1) 88deg,rgba(155,173,174,0.168) 91.5deg,rgba(87,48,70,0) 118.88deg,rgba(155,173,174,0.198) 257deg,rgba(12,25,40,1) 267deg,#0B182E 277.87deg,#612E44 284.48deg,rgba(0,0,0,0.0) 312deg)`
		: `conic-gradient(from 180deg at 50% 50%,rgba(232,163,207,0) 0deg,#E263AA 78deg,rgba(227,150,193,0) 95deg,rgba(200,46,132,0) 258deg,#D35785 296.48deg,rgba(203,59,113,0) 360deg)`};
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

const MusicWidget = ({ title, author, album, onPause, onPlay, onNext, onPrevious, theme = "dark" }) => {
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
				<TopSectionBorder theme={theme} />
				<TopSectionBg theme={theme}>
					<Author theme={theme}>{author}</Author>
					<TitleAlbumWrapper theme={theme}>
						<Title>{title}</Title>
						<Album title={album}>{album}</Album>
					</TitleAlbumWrapper>
				</TopSectionBg>
			</TopSection>
			<BottomSection>
				<BottomSectionBorder theme={theme} />
				<BottomSectionBg theme={theme}>
					<StyledButton onClick={onPrevious}><Button theme={theme} icon={<PrevIcon />} variant={VARIANTS.BLUE} /></StyledButton>
					<StyledButton onClick={handlePlayPauseClick}>{playing ? <Button theme={theme} icon={<Rectangle />} /> : <Button theme={theme} icon={<PlayIcon />} />}</StyledButton>
					<StyledButton onClick={onNext}><Button theme={theme} icon={<NextIcon />} /></StyledButton>
				</BottomSectionBg>
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
