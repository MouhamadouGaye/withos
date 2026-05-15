// backend/src/repositories/SupporterRepository.ts
import { pool } from "../config/database";
import { Supporter, CreateSupporterDto } from "../types";

export class SupporterRepository {
  async create(supporterData: CreateSupporterDto): Promise<Supporter> {
    const {
      name,
      email,
      phone_number,
      contact_preference,
      join_whatsapp = false,
    } = supporterData;

    const query = `
      INSERT INTO supporters (name, email, phone_number, contact_preference, whatsapp_group_joined) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
    `;

    const values = [
      name,
      email || null,
      phone_number,
      contact_preference,
      join_whatsapp,
    ];

    try {
      const result = await pool.query<Supporter>(query, values);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Failed to create supporter: ${error}`);
    }
  }

  async findAll(): Promise<Supporter[]> {
    const query = "SELECT * FROM supporters ORDER BY created_at DESC";
    try {
      const result = await pool.query<Supporter>(query);
      return result.rows;
    } catch (error) {
      throw new Error(`Failed to fetch supporters: ${error}`);
    }
  }

  async findById(id: number): Promise<Supporter | null> {
    const query = "SELECT * FROM supporters WHERE id = $1";
    try {
      const result = await pool.query<Supporter>(query, [id]);
      return result.rows[0] || null;
    } catch (error) {
      throw new Error(`Failed to fetch supporter: ${error}`);
    }
  }

  async countTotal(): Promise<number> {
    const query = "SELECT COUNT(*) FROM supporters";
    try {
      const result = await pool.query<{ count: string }>(query);
      return parseInt(result.rows[0].count);
    } catch (error) {
      throw new Error(`Failed to count supporters: ${error}`);
    }
  }
}
