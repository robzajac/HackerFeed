export const LOADSTORIES_REJ = 'LOADSTORIES_REJ';
export const LOADSTORIES_FUL = 'LOADSTORIES_FUL';

// Loads story IDs from HackerNews.
// API provides top 500 stories.
export function getStoryIDs() {
  return (dispatch) => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {method: 'GET'})
    .then(response => response.json())
    .then((res) => {
      dispatch({
        type: LOADSTORIES_FUL,
        storyIDs: res
      });
    }).catch((err) => {
      dispatch({
        type: LOADSTORIES_REJ,
        error: err
      });
    });
  };
}

