const GET_COURSES = `
query {
  allCourses {
    data {
      _id
      name
      image
      price
      description
      author
    }
  }
}`;

const CREATE_COURSE = `
    mutation($name: String!, $url: String!, $description: String! ) {
        createLink( data: { name:$name, url: $url, description: $description, archived: false }) {
            name
            _id
            url
            description
            archived
        }
    }
`;
const GET_ONE_COURSE = `
query($id: ID!) {
  findCourseByID(id: $id) {
    name
    description
    price
    author
    image
  }
}
`;
module.exports = {
  GET_COURSES,
  CREATE_COURSE,
  GET_ONE_COURSE,
};
