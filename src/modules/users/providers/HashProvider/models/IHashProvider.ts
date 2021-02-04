export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payloasd: string, hashed: string): Promise<boolean>;
}
