import '../../styles/components/WelcomeNotice.css';
import { useState } from 'react';

const WelcomeNotice = () => {
	const [isOpened, setIsOpened] = useState(true);
	const noticeClassName = isOpened ? '' : 'hidden';

	return(
		<section id="welcome-notice" className={noticeClassName}>
			<i className="icon_memphis-3"></i>
			<i className="icon_memphis-4"></i>
			<i className="icon_memphis-5"></i>
			<i className="icon_memphis-6"></i>
			<span>Selamat datang, anda dapat mengakses berbagai informasi seperti Kependudukan, berbagai berita seputar desa ... dll</span>
			<button 
				className="icon_cross-fff" 
				aria-label="Close Notice"
				onClick={() => setIsOpened(false)}
			></button>
		</section>
	);
};

export default WelcomeNotice;