import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import FullStack from './components/FullStack'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import Career from './components/Career'
import All from './components/All'

function App() {
  let cardItem = [
    {
      type: "cs",
      image:
        "https://pmstudycircle.com/wp-content/uploads/2023/02/cybersecurity-courses.png",
      courseTittle: "cybersecurity",

    },
    {
      type: "fsd",
      image:
        "https://www.vectorindia.org/assets/images/fulstack-mern-image.jpg",
      courseTittle: "full stack development ",
    },
    {
      type: "ds",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg",
      courseTittle: "Datascience",
    },
    {
      type: "career",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.iKkPlhwyFSnKHwSvTnzBAAHaEK&pid=Api&P=0&h=180",
      courseTittle: "career",
    },
    {
      type: "fsd",
      image:
        "https://www.vectorindia.org/assets/images/fulstack-mern-image.jpg",
      courseTittle: "full stack development ",
    },
    {
      type: "ds",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg",
      courseTittle: "Datascience"
    },
    {
      type: "cs",
      image:
        "https://pmstudycircle.com/wp-content/uploads/2023/02/cybersecurity-courses.png",
      courseTittle: "cybersecurity",
      
    },
    {
      type: "fsd",
      image:
        "https://www.vectorindia.org/assets/images/fulstack-mern-image.jpg",
      courseTittle: "full stack development ",
    },
    {
      type: "ds",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg",
      courseTittle: "Datascience",
    },
    {
      type: "career",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.iKkPlhwyFSnKHwSvTnzBAAHaEK&pid=Api&P=0&h=180",
      courseTittle: "career",
    },
    {
      type: "fsd",
      image:
        "https://www.vectorindia.org/assets/images/fulstack-mern-image.jpg",
      courseTittle: "full stack development ",
    },
    {
      type: "ds",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg",
      courseTittle: "Datascience"
    },
    {
      type: "cs",
      image:
        "https://pmstudycircle.com/wp-content/uploads/2023/02/cybersecurity-courses.png",
      courseTittle: "cybersecurity",
      
    },
    {
      type: "fsd",
      image:
        "https://www.vectorindia.org/assets/images/fulstack-mern-image.jpg",
      courseTittle: "full stack development ",
    },
    {
      type: "ds",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg",
      courseTittle: "Datascience",
    },
    {
      type: "career",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.iKkPlhwyFSnKHwSvTnzBAAHaEK&pid=Api&P=0&h=180",
      courseTittle: "career",
    },
    {
      type: "fsd",
      image:
        "https://www.vectorindia.org/assets/images/fulstack-mern-image.jpg",
      courseTittle: "full stack development ",
    },
    {
      type: "ds",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg",
      courseTittle: "Datascience"
    }
  ]
 
  return <>
  
  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route path='/all' element={<All data={cardItem}/>}/>
    <Route path='/fullstack' element={<FullStack data={cardItem}/>}/>
    <Route path='/cybersecurity' element={<CyberSecurity data={cardItem}/>}/>
    <Route path='/datascience' element={<DataScience data={cardItem}/>}/>
    <Route path='/career' element={<Career data={cardItem}/>}/>
    <Route path='*' element={<Navigate to='/all'/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App