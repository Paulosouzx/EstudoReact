import {Header} from "./Components/Header";
import {Sidebar} from "./Components/Sidebar";
import {Post} from "./Components/Post";

import style from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/saradelimalira.png",
      name: "Sara",
      role: "CTO"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat O nome do projeto é DoctorCare 🚀"
      },
      {type: "link", content: "saraa.design/doctorcare"}
    ],
    publishedAt: new Date("2024-03-11 19:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Paulosouzx.png",
      name: "Paulo",
      role: "Software Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat O nome do projeto é DoctorCare 🚀"
      },
      {type: "link", content: "saraa.design/doctorcare"}
    ],
    publishedAt: new Date("2024-05-14 19:00:00")
  }
];

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
