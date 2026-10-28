import { createLegalRoute } from "@/components/legal/createLegalRoute";

const route = createLegalRoute("refunds", "en");

export const generateMetadata = route.generateMetadata;
export default route.Page;
