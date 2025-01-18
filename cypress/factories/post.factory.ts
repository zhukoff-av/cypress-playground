import { faker } from '@faker-js/faker';
import { Post, NewPost } from '../types/api/post.types';

export class PostFactory {
  static createNew(override: Partial<NewPost> = {}): NewPost {
    return {
      userId: faker.number.int({ min: 1, max: 10 }),
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(2),
      ...override,
    };
  }

  static create(override: Partial<Post> = {}): Post {
    return {
      id: faker.number.int({ min: 1, max: 100 }),
      ...this.createNew(),
      ...override,
    };
  }

  static createMany(count: number, override: Partial<Post> = {}): Post[] {
    return Array.from({ length: count }, () => this.create(override));
  }
}
