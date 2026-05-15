// backend/src/repositories/StatsRepository.ts
import { pool } from "../config/database";
import { CampaignStats } from "../types";

export class StatsRepository {
  async getStats(): Promise<CampaignStats> {
    const query = "SELECT * FROM campaign_stats WHERE id = 1";
    try {
      const result = await pool.query<CampaignStats>(query);
      if (result.rows.length === 0) {
        // Create initial stats if not exists
        await this.initializeStats();
        return this.getStats();
      }
      return result.rows[0];
    } catch (error) {
      throw new Error(`Failed to fetch stats: ${error}`);
    }
  }

  async initializeStats(): Promise<void> {
    const query = `
      INSERT INTO campaign_stats (id, total_supporters, whatsapp_members, email_subscribers) 
      VALUES (1, 0, 0, 0)
      ON CONFLICT (id) DO NOTHING
    `;
    try {
      await pool.query(query);
    } catch (error) {
      throw new Error(`Failed to initialize stats: ${error}`);
    }
  }

  async updateStats(
    joinWhatsapp: boolean,
    contactPreference: string,
  ): Promise<void> {
    const whatsappIncrement = joinWhatsapp ? 1 : 0;
    const emailIncrement =
      contactPreference === "email" || contactPreference === "both" ? 1 : 0;

    const query = `
      UPDATE campaign_stats 
      SET total_supporters = total_supporters + 1,
          whatsapp_members = whatsapp_members + $1,
          email_subscribers = email_subscribers + $2
      WHERE id = 1
    `;

    try {
      await pool.query(query, [whatsappIncrement, emailIncrement]);
    } catch (error) {
      throw new Error(`Failed to update stats: ${error}`);
    }
  }
}
