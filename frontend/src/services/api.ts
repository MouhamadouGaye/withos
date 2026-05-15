// frontend/src/services/api.ts
import axios from "axios";
import type { CampaignStats, CreateSupporterData, Supporter } from "../types";

const API_BASE_URL = "http://localhost:5001/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  // Récupérer les statistiques
  getStats: async (): Promise<CampaignStats> => {
    const response = await api.get("/stats");
    return response.data;
  },

  // Créer un nouveau supporter
  createSupporter: async (data: CreateSupporterData): Promise<Supporter> => {
    const response = await api.post("/supporters", data);
    return response.data.data;
  },

  // Récupérer tous les supporters (si besoin)
  getSupporters: async (): Promise<Supporter[]> => {
    const response = await api.get("/supporters");
    return response.data.data;
  },

  // Récupérer le lien WhatsApp
  getWhatsAppLink: async (): Promise<string> => {
    const response = await api.get("/whatsapp-link");
    return response.data.link;
  },
};
