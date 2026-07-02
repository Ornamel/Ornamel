export const routes = {
  home: "/",
  about: "/about",
  studioModel: "/studio/model",
  buildToTransfer: "/studio/build-to-transfer",
  buildToTransferQualify: "/studio/build-to-transfer/qualify",
  studioFounders: "/studio/founders",
  f2vsApply: "/studio/founders/apply",
  studioTalent: "/studio/talent",
  studioInvestors: "/studio/investors",
  studioInvestorsDeck: "/studio/investors/deck",
  programAmali: "/programs/amali",
  programAmaliApply: "/programs/amali/apply",
  programVsop: "/programs/vsop",
  programVsopEnroll: "/programs/vsop/enroll",
  portfolio: "/portfolio",
  collectiveF2Nation: "/collective/f2nation",
  collectiveEvents: "/collective/events",
  insightsBlog: "/insights/blog",
  insightsResources: "/insights/resources",
  startVenture: "/start-a-venture",
  startVentureBrief: "/start-a-venture/brief",
  talkToTeam: "/talk-to-team",
} as const;

export type NavSection =
  | "about"
  | "studio"
  | "programs"
  | "portfolio"
  | "collective"
  | "insights"
  | "";
