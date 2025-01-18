import { PostFactory } from '../../factories/post.factory';
import { TestConfig } from '../../support/test-config';
import { postsArraySchema } from '../../schemas/post.schema';
import {
  POSTS_TEST_DATA as TD,
  ERROR_MESSAGES as EM,
} from '../../test-data/constants/posts.constants';
import { HttpStatus } from '../../test-data/constants/http.constants';

describe('Posts API Tests', () => {
  const config = TestConfig.getInstance();
  const { softAssert, postsClient } = config;

  beforeEach(() => {
    config.resetSoftAssert();
  });

  afterEach(() => {
    softAssert.assertAll();
  });

  context('GET Endpoints', () => {
    context('Get All Posts', () => {
      it('should return all posts with correct schema and non-empty array', () => {
        postsClient.getAllPosts().then(response => {
          softAssert.assert(response.status === HttpStatus.OK, EM.STATUS_CODE(HttpStatus.OK));
          softAssert.assert(Array.isArray(response.body), EM.ARRAY_TYPE);
          softAssert.assert(response.body.length >= TD.EXPECTED_MIN_POSTS, EM.EMPTY_ARRAY);
          softAssert.assertSchema(
            postsArraySchema,
            response.body,
            EM.SCHEMA_VALIDATION('Posts array'),
          );
        });
      });

      it('should return posts filtered by userId', () => {
        postsClient.getPostsByUserId(TD.VALID_USER_ID).then(response => {
          softAssert.assert(response.status === HttpStatus.OK, EM.STATUS_CODE(HttpStatus.OK));
          // ... rest of the test
        });
      });
    });

    context('Get Single Post', () => {
      it('should return specific post by id', () => {
        postsClient.getPostById(TD.VALID_POST_ID).then(response => {
          softAssert.assert(response.status === HttpStatus.OK, EM.STATUS_CODE(HttpStatus.OK));
          // ... rest of the test
        });
      });

      it('should handle non-existent post id', () => {
        postsClient.getNonExistentPost(TD.INVALID_POST_ID).then(response => {
          softAssert.assert(
            response.status === HttpStatus.NOT_FOUND,
            EM.STATUS_CODE(HttpStatus.NOT_FOUND),
          );
          // ... rest of the test
        });
      });
    });
  });

  context('POST Endpoints', () => {
    it('should create new post', () => {
      const newPost = PostFactory.createNew();

      postsClient.createPost(newPost).then(response => {
        softAssert.assert(
          response.status === HttpStatus.CREATED,
          EM.STATUS_CODE(HttpStatus.CREATED),
        );
        // ... rest of the test
      });
    });
  });

  context('PUT Endpoints', () => {
    it('should update existing post', () => {
      const updatedPost = PostFactory.createNew({
        title: 'Updated Title',
        body: 'Updated body content',
      });

      postsClient.updatePost(TD.VALID_POST_ID, updatedPost).then(response => {
        softAssert.assert(response.status === HttpStatus.OK, EM.STATUS_CODE(HttpStatus.OK));
        // ... rest of the test
      });
    });
  });

  context('PATCH Endpoints', () => {
    it('should partially update existing post', () => {
      const partialUpdate = {
        title: 'Patched Title',
      };

      postsClient.partialUpdatePost(TD.VALID_POST_ID, partialUpdate).then(response => {
        softAssert.assert(response.status === HttpStatus.OK, EM.STATUS_CODE(HttpStatus.OK));
        // ... rest of the test
      });
    });
  });

  context('DELETE Endpoints', () => {
    it('should delete existing post', () => {
      postsClient.deletePost(TD.VALID_POST_ID).then(response => {
        softAssert.assert(response.status === HttpStatus.OK, EM.STATUS_CODE(HttpStatus.OK));
        // ... rest of the test
      });
    });
  });
});
