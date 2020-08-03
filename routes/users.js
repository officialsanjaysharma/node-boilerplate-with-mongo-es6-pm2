/**
 * @file This will initialize all user the routes.
 * @this userRoute
 * @exports router
 *
 * @author Sanjay Sharma
 */
import express from 'express';
import candidateSchema from '../model/users';

const router = express.Router();

/**
 *
 * @param request
 * @param response
 * @param next
 */
router.get('/', (request, response, next) => {
  candidateSchema
    .find({})
    .then((res) => {
      if (res) {
        response.send(res).status(200);
      } else {
        response.send('Error in getting candidates').statusCode(500);
      }
    })
    .catch((err) => response.send('Error in getting candidates').statusCode(500));
});
/**
 *
 * @param request
 * @param response
 * @param next
 */
router.get('/:id', (request, response, next) => {
  candidateSchema
    .findById(request.params.id)
    .then((res) => {
      if (res) {
        response.send(res).statusCode(200);
      } else {
        response.send('Error in getting candidates').statusCode(500);
      }
    })
    .catch((err) => response.send('Error in getting candidate').statusCode(500));
});
/**
 *
 * @param request
 * @param response
 * @param next
 */
router.post('/', (request, response, next) => {
  candidateSchema
    .create(request.body)
    .then((res) => {
      if (res) {
        response.status(200).send(JSON.stringify(res));
      } else {
        response.send('Error in saving candidate').status(500);
      }
    })
    .catch((err) => {
      response.send('Error in saving candidates').status(500);
    });
});
/**
 *
 * @param request
 * @param response
 * @param next
 */
router.delete('/:id', (request, response, next) => {
  candidateSchema
    .findByIdAndRemove(request.params.id)
    .then((res) => {
      if (res) {
        response.send(res).statusCode(200);
      } else {
        response.send('Error in deleting candidate').statusCode(500);
      }
    })
    .catch((err) => response.send('Error in deleting candidate').statusCode(500));
});
/**
 *
 * @param request
 * @param response
 * @param next
 */
router.put('/:id', (request, response, next) => {
  candidateSchema
    .findByIdAndUpdate({ _id: request.params.id }, { $set: request.body }, { new: true })
    .then((res) => {
      if (res) {
        response.send(res).statusCode(200);
      } else {
        response.send('Error in updating candidate').statusCode(500);
      }
    })
    .catch((err) => response.send('Error in updating candidate').statusCode(500));
});

module.exports = router;
