import logo from './logo.svg';
import './App.css';
import { Blog, posts, courses, books } from './Components/Blog';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Blog posts={posts} courses={courses} books={books}/>
    </div>
  );
}

export default App;
