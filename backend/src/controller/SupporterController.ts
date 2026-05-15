// backend/src/controllers/SupporterController.ts
import { Request, Response } from "express";
import { SupporterService } from "../services/SupporterService";
import { CreateSupporterDto, ApiResponse } from "../types";

export class SupporterController {
  private supporterService: SupporterService;

  constructor() {
    this.supporterService = new SupporterService();
  }

  createSupporter = async (req: Request, res: Response): Promise<void> => {
    try {
      const supporterData: CreateSupporterDto = req.body;
      const supporter =
        await this.supporterService.createSupporter(supporterData);

      const response: ApiResponse = {
        success: true,
        data: supporter,
        message: "Soutien enregistré avec succès",
      };

      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse = {
        success: false,
        error:
          error instanceof Error ? error.message : "Une erreur est survenue",
      };

      res.status(400).json(response);
    }
  };

  getAllSupporters = async (req: Request, res: Response): Promise<void> => {
    try {
      const supporters = await this.supporterService.getAllSupporters();

      const response: ApiResponse = {
        success: true,
        data: supporters,
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
