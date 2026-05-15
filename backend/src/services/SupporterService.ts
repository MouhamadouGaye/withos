import { StatsRepository } from "../repositories/StatsRepository";
import { SupporterRepository } from "../repositories/SupporterRepository";
import { CreateSupporterDto, Supporter } from "../types";

export class SupporterService {
  private supporterRepository: SupporterRepository;
  private statsRepository: StatsRepository;

  constructor() {
    this.supporterRepository = new SupporterRepository();
    this.statsRepository = new StatsRepository();
  }

  async createSupporter(supporterData: CreateSupporterDto): Promise<Supporter> {
    // Validation
    this.validateSupporterData(supporterData);

    // Create supporter
    const supporter = await this.supporterRepository.create(supporterData);

    // Update statistics
    await this.statsRepository.updateStats(
      supporterData.join_whatsapp || false,
      supporterData.contact_preference,
    );

    return supporter;
  }

  private validateSupporterData(data: CreateSupporterDto): void {
    if (!data.name || data.name.trim().length < 2) {
      throw new Error("Le nom doit contenir au moins 2 caractères");
    }

    if (!data.phone_number || data.phone_number.trim().length < 8) {
      throw new Error("Numéro de téléphone invalide");
    }

    if (data.email && !this.isValidEmail(data.email)) {
      throw new Error("Email invalide");
    }

    if (!["email", "whatsapp", "both"].includes(data.contact_preference)) {
      throw new Error("Préférence de contact invalide");
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async getAllSupporters(): Promise<Supporter[]> {
    return await this.supporterRepository.findAll();
  }

  async getSupporterById(id: number): Promise<Supporter | null> {
    return await this.supporterRepository.findById(id);
  }

  async getTotalCount(): Promise<number> {
    return await this.supporterRepository.countTotal();
  }
}
