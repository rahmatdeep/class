import { RedisClientType, createClient } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;
  private redisClient: RedisClientType;
  private subscriptions: Map<string, string[]>;

  private constructor() {
    this.redisClient = createClient();
    this.redisClient.connect();
    this.subscriptions = new Map();
  }

  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  public addUserToStock(userId: string, stockTicker: string) {
    if (!this.subscriptions.has(stockTicker)) {
      this.subscriptions.set(stockTicker, []);
    }
    this.subscriptions.get(stockTicker)?.push(userId);

    if (this.subscriptions.get(stockTicker)?.length === 1) {
      {
        this.redisClient.subscribe(stockTicker, (message) => {
          this.handleMessage(stockTicker, message);
        });
        console.log(`Subscribed to Redis channel: ${stockTicker}`);
      }
    }
  }

  public removeUserFromStock(userId: string, stockTicker: string) {
    this.subscriptions.set(
      stockTicker,
      this.subscriptions.get(stockTicker)?.filter((sub) => sub !== userId) || []
    );
    if (this.subscriptions.get(stockTicker)?.length === 0) {
      this.redisClient.unsubscribe(stockTicker);
      console.log(`Unsubscribed to Redis chanel: ${stockTicker}`);
    }
  }

  private handleMessage(stockTicker: string, message: string) {
    console.log(`Message recieved on channel ${stockTicker}: ${message}`);
    this.subscriptions.get(stockTicker)?.forEach((sub) => {
      console.log(`Sending message to user: ${sub}`);
    });
  }

  public async disconnect() {
    await this.redisClient.quit();
  }
}
