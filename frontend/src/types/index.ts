// frontend/src/types/index.ts
export interface Supporter {
  id: number;
  name: string;
  email: string | null;
  phone_number: string;
  contact_preference: "email" | "whatsapp" | "both";
  whatsapp_group_joined: boolean;
  created_at: string;
}

export interface CampaignStats {
  total_supporters: number;
  whatsapp_members: number;
  email_subscribers: number;
}

export interface CreateSupporterData {
  name: string;
  email?: string;
  phone_number: string;
  contact_preference: "email" | "whatsapp" | "both";
  join_whatsapp: boolean;
}
