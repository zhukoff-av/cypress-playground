import { PostsApiClient } from '../api/posts-api.client';
import { SoftAssert } from '../utils/soft-assert';

export class TestConfig {
  private static instance: TestConfig;
  private _softAssert: SoftAssert;
  private _postsClient: PostsApiClient;

  private constructor() {
    this._softAssert = new SoftAssert();
    this._postsClient = new PostsApiClient();
  }

  static getInstance(): TestConfig {
    if (!TestConfig.instance) {
      TestConfig.instance = new TestConfig();
    }
    return TestConfig.instance;
  }

  get softAssert(): SoftAssert {
    return this._softAssert;
  }

  get postsClient(): PostsApiClient {
    return this._postsClient;
  }

  resetSoftAssert(): void {
    this._softAssert = new SoftAssert();
  }
}
