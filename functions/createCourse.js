require('dotenv').config();
const { CREATE_COURSE } = require('./utils/courseQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
  const { name, price, description, author, image } = JSON.parse(event.body);
  const variables = { name, price, description, author, image };
  try {
    const { createCourse: createdCourse } = await sendQuery(
      CREATE_COURSE,
      variables
    );

    return formattedResponse(200, createdCourse);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
};
