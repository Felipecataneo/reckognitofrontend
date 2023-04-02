import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Uploader } from './components/Uploader/Uploader';
import { ImagesList } from './components/ImagesList/ImagesList';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Uploader />
        <ImagesList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
