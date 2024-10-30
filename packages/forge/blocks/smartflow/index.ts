import { createBlock } from "@typebot.io/forge";
import { auth } from "./auth";
import { SmartflowLogo } from "./logo";
import { openChat } from "./actions/openChat";

export const smartflowBlock = createBlock({
  id: "smartflow",
  name: "SmartFlow",
  tags: [],
  LightLogo: SmartflowLogo,
  auth,
  actions: [openChat],
});
