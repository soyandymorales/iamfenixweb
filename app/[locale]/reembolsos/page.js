import { createLegalRoute } from "@/components/legal/createLegalRoute";

const route = createLegalRoute("refunds", "es");

export const generateMetadata = route.generateMetadata;
export default route.Page;
