import { createRoot } from 'react-dom/client';
import Test from './components/Test';
import { GlobalStyle, TestButton } from '@common/design-system';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Test />
			화면 테스트
			<TestButton />
		</>
	);
};

const container = document.getElementById('root');
createRoot(container!).render(<App />);
