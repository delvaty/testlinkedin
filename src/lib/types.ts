export type InformationType = {
  id: number;
  business_id: number;
  sender_name: string;
  message_text: string;
  message_date: Date;
  platform: Platform;
  sender_number: number;
  received_number: number;
  bot_sender: number;
  reply_to_id: number | null;
};

export enum Platform {
  Facebook = "facebook",
  Instagram = "instagram",
  Whatsapp = "whatsapp",
}
