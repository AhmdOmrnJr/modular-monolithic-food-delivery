import * as bcrypt from 'bcrypt';

export class PasswordUtils {
  private static get saltRounds(): number {
    return parseInt(process.env.SALT_ROUNDS || '10', 10);
  }

  static async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  static async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
