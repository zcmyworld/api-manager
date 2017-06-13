import request from '../utils/request';

// export function fetch({ page }) {
//   return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
// }

// export function remove(id) {
//   return request(`/api/users/${id}`, {
//     method: 'DELETE',
//   });
// }

// export function patch(id, values) {
//   return request(`/api/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify(values),
//   });
// }


class Project {
  list() {
    return request('/projects').then((res)=> {
      return res.data;
    });
  }
}

export default new Project();