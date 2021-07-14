require('dotenv').config();
const { GET_COURSES } = require('./utils/courseQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_COURSES);
    const data = res.allCourses.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
};
