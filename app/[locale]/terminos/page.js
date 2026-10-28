import { createLegalRoute } from "@/components/legal/createLegalRoute";

const route = createLegalRoute("terms", "es");

export const generateMetadata = route.generateMetadata;
export default route.Page;
