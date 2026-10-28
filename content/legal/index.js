import { getOperator } from "@/content/legal/operator";
import { legalPath } from "@/content/legal/navigation";
import { getPrivacyPolicy } from "@/content/legal/privacy";
import { getRefundPolicy } from "@/content/legal/refunds";
import { getTermsOfService } from "@/content/legal/terms";

const loaders = {
  privacy: getPrivacyPolicy,
  terms: getTermsOfService,
  refunds: getRefundPolicy,
};

export { legalPath };

export function getLegalDocument(id, locale) {
  const loader = loaders[id];
  if (!loader) return null;
  return {
    ...loader(locale),
    id,
    operator: getOperator(locale),
  };
}
