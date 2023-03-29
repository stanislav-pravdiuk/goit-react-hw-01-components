// import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';
import data from './user.json';

function CreteMarkup(props) {
  return (
// const rootContainer = document.querySelector('#root');
  <div class="profile">
    <div class="description">
      <img
        src={props.src}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{data.username}</p>
      <p class="tag">{data.tag}</p>
      <p class="location">{data.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers </span>
        <span class="`quantity">{data.stats.followers}`</span>
      </li>
      <li>
        <span class="label">Views </span>
        <span class="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes </span>
        <span class="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
<CreteMarkup src={data.avatar} name={data.username} tag={data.tag} location={data.location} />
);