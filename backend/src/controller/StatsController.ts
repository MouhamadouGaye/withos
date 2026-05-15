// backend/src/controllers/StatsController.ts
import { Request, Response } from "express";
import { StatsRepository } from "../repositories/StatsRepository";
import { StatsResponse, ApiResponse } from "../types";

export class StatsController {
  private statsRepository: StatsRepository;

  constructor() {
    this.statsRepository = new StatsRepository();
  }

  getStats = async (req: Request, res: Response): Promise<void> => {
    try {
      const stats = await this.statsRepository.getStats();

      const response: StatsResponse = {
        total_supporters: stats.total_supporters,
        whatsapp_members: stats.whatsapp_members,
        email_subscribers: stats.email_subscribers,
      };

      res.json(response);
    } catch (error) {
      const response: ApiResponse = {
        success: false,
        error:
          error instanceof Error ? error.message : "Une erreur est survenue",
      };

      res.status(500).json(response);
    }
  };
}
