import { createLegalRoute } from "@/components/legal/createLegalRoute";

const route = createLegalRoute("privacy", "es");

export const generateMetadata = route.generateMetadata;
export default route.Page;
