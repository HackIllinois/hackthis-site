import savedData from './saved-data.json';

const API = 'https://api.hackillinois.org';

function request(method, endpoint, body) {
  return fetch(API + endpoint, {
    method,
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  });
}

export function isAuthenticated() {
  return sessionStorage.getItem('token');
}

export function authenticate(to) {
  if (process.env.REACT_APP_TOKEN) {
    sessionStorage.setItem('token', process.env.REACT_APP_TOKEN);
  } else {
    to = `${process.env.REACT_APP_URL}/auth/?to=${to}`;
    to = `${API}/auth/github/?redirect_uri=${to}`;
  }
  window.location.replace(to);
}

export function getToken(code) {
  return request('POST', '/auth/code/github/', { code })
    .then(res => res.token);
}

export function getRoles() {
  return request('GET', '/auth/roles/')
    .then(res => res.roles);
}

export function getRolesSync() {
  const token = sessionStorage.getItem('token');
  if (token) {
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return tokenData.roles;
    } catch (e) {
      // if the token is incorrectly formatted, we just ignore it and return the default []
    }
  }
  return [];
}

export function getRegistration(role) {
  return request('GET', `/registration/${role}/`);
}

export function register(isEditing, role, registration) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, `/registration/${role}/`, registration);
}

export function getRSVP() {
  return request('GET', '/rsvp/');
}

export function rsvp(isEditing, registration) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, '/rsvp/', registration);
}

export function uploadFile(file, type) {
  return request('GET', `/upload/${type}/upload/`)
    .then(res => fetch(res[type], {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    }))
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res);
    });
}

export function getQR() {
  return request('GET', '/user/qr/');
}

export function getPrizes() {
  return request('GET', '/upload/blobstore/prizes/')
    .then(res => res.data);
}

export function refreshToken() {
  return request('GET', '/auth/token/refresh/')
    .then(res => sessionStorage.setItem('token', res.token));
}

export function getMentorTimeslots() {
  return Promise.resolve(savedData.mentorTimeslots);
  // return request('GET', '/upload/blobstore/mentor-timeslots/')
  //   .then(res => res.data);
}

export function setMentorTimeslots(data) {
  return Promise.reject('Unfortunately mentor availability is no longer editable');
  // return request('PUT', '/upload/blobstore/', { id: 'mentor-timeslots', data })
  //   .then(res => res.data);
}

export function getEvents() {
  return Promise.resolve(savedData.events);
  // return request('GET', '/event/')
    // .then(res => log(res.events));
}
