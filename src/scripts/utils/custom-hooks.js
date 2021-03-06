import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderBackground = (position) => {
	const { pathname } = useLocation();
	const whiteHeaderPath = [];
	const checkPath = whiteHeaderPath.some((item) => item === pathname);
	if (position === 'top' && checkPath) return 'white'

	return 'transparent';
};


const useWindowInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(0);
	window.addEventListener('resize', () => {
		setInnerWidth(window.innerWidth);
	});

	return innerWidth;
}


const useWindowScroll = () => {
	const [xScroll, setXScroll] = useState(0);
	const [yScroll, setYScroll] = useState(0);
	window.addEventListener('scroll', () => {
		setXScroll(window.pageXOffset);
		setYScroll(window.pageYOffset);
	});

	return {xScroll, yScroll};
};

export {
	useHeaderBackground,
	useWindowInnerWidth,
	useWindowScroll,
};