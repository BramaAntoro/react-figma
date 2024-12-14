import MyNavbar from './component/MyNavbar';
import Stories from './component/Stories';
import Post from './component/Post';


// Main App Component
const App = () => {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        <MyNavbar />
        <div className="flex-1 lg:ml-64">
          <div className="max-w-4xl mx-auto py-6 px-2 md:px-4 mt-12 lg:mt-0">
            <Stories />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
