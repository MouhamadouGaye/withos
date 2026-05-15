// backend/src/types/index.ts
export interface Supporter {
  id: number;
  name: string;
  email: string | null;
  phone_number: string;
  contact_preference: "email" | "whatsapp" | "both";
  whatsapp_group_joined: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface CampaignStats {
  id: number;
  total_supporters: number;
  whatsapp_members: number;
  email_subscribers: number;
}

export interface CreateSupporterDto {
  name: string;
  email?: string;
  phone_number: string;
  contact_preference: "email" | "whatsapp" | "both";
  join_whatsapp?: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface StatsResponse {
  total_supporters: number;
  whatsapp_members: number;
  email_subscribers: number;
}

export interface WhatsAppLinkResponse {
  link: string;
}
