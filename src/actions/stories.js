export const LOADSTORIES_REJ = 'LOADSTORIES_REJ';
export const LOADSTORIES_FUL = 'LOADSTORIES_FUL';

// Load the story info based on an ID.
function loadStory(id) {
  return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json', {method: 'GET'})
  .then(response => {
    return response.json();
  });
}

// Loads story IDs from HackerNews.
// API provides top 500 stories.
// TODO give back more than top 50, figure out how to lazy load on frontend
function loadStoryIDs() {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {method: 'GET'})
  .then(response => {
    return response.json();
  });
}

// Loads all stories given by the IDs in the input.
export function loadStories() {
  return (dispatch) => {
    loadStoryIDs()
    .then((ids) => {
      console.log("start load");
      let loads = ids.splice(0,50).map(id => 
        fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json', {method: 'GET'})
        .then(response => {
          return response.json();
        })
      );
      console.log("loads loaded", loads);
      Promise.all(loads).then(stories => {
        dispatch({
          type: LOADSTORIES_FUL,
          stories: stories
        });
      });
    })
    .catch((err) => {
      dispatch({
        type: LOADSTORIES_REJ,
        error: err
      });
    });
  };
}