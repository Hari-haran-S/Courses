require('dotenv').config();
const { GET_ONE_COURSE } = require('./utils/courseQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { findCourseByID: course } = await sendQuery(
      GET_ONE_COURSE,
      variables
    );
    return formattedResponse(200, course);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
};
