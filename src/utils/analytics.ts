import { track } from "@vercel/analytics";
import type { Lang } from "../content";
export type AnalyticsPage =
  | "home"
  | "privacy"
  | "terms"
  | "email"
  | "email_confirmed"
  | "email_unsubscribed"
  | "account_delete_completed"
  | "email_preferences";
type CtaClickEvent = {
  id: string;
  label: string;
  lang: Lang;
  page: AnalyticsPage;
  target: string;
};
export function trackCtaClick(event: CtaClickEvent) {
  if (import.meta.env.DEV) {
    console.info("[analytics] cta_click", event);
  }
  track("cta_click", {
    id: event.id,
    label: event.label,
    lang: event.lang,
    page: event.page,
    target: event.target,
  });
}
