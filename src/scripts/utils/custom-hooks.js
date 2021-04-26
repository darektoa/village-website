import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderBackground = (position) => {
	const { pathname } = useLocation();
	const whiteHeaderPath = ['/', '/home'];
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

export {
	useHeaderBackground,
	useWindowInnerWidth,
};