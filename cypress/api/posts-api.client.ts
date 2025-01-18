import { BaseApiClient } from './base-api.client';
import { Post, NewPost } from '../types/api/post.types';

export class PostsApiClient extends BaseApiClient {
  private readonly basePath = '/posts';

  getAllPosts() {
    return this.get(this.basePath);
  }

  getPostById(id: number) {
    return this.get(`${this.basePath}/${id}`);
  }

  getPostsByUserId(userId: number) {
    return this.get(this.basePath, { userId });
  }

  createPost(post: NewPost) {
    return this.post(this.basePath, post);
  }

  updatePost(id: number, post: NewPost) {
    return this.put(`${this.basePath}/${id}`, post);
  }

  partialUpdatePost(id: number, update: Partial<Post>) {
    return this.patch(`${this.basePath}/${id}`, update);
  }

  deletePost(id: number) {
    return this.delete(`${this.basePath}/${id}`);
  }

  getNonExistentPost(id: number) {
    return this.handleError(`${this.basePath}/${id}`);
  }
}
