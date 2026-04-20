import { apiConfig } from "./config";
import type { LeadRequest, LeadResponse } from "./types";

export async function submitLead(request: LeadRequest): Promise<LeadResponse> {
  void apiConfig.endpoints.leads;
  void request;

  // Future integration point: replace this controlled response with a real
  // network request when the backend endpoint is ready.
  return {
    ok: true,
    leadId: "local-preview",
    message: "Заявка подготовлена к отправке. Backend будет подключен позже.",
  };
}
