export const SAVE_REJ = 'SAVE_REJ';
export const SAVE_FUL = 'SAVE_FUL';

export const GETLINKS_REJ = 'GETLINKS_REJ';
export const GETLINKS_FUL = 'GETLINKS_FUL';

export default function authenticatedRequest(type, url, body) {
  let config = {
    method: type,
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  };

  if (type === 'POST') {
    config.headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(body ? body : {});
  }

  return fetch(url, config)
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response);
      }
    });
}

export function saveLink(link) {
  return (dispatch) => {
    authenticatedRequest('POST', '/api/links/addlink', {link: link})
    .then(res => {
      return res.json();
    })
    .then((response) => {
      dispatch({
        type: SAVE_FUL
      });
    })
    .catch((err) => {
      dispatch({
        type: SAVE_REJ,
        error: err
      });
    });
  };
}

export function getLinks() {
  return (dispatch) => {
    authenticatedRequest('GET', '/api/links/getlinks')
    .then(res => {
      return res.json();
    })
    .then((response) => {
      dispatch({
        type: GETLINKS_FUL,
        links: response.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GETLINKS_REJ,
        error: err
      });
    });
  };
}