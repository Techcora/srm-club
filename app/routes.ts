import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("v1", "routes/v1.tsx"),
  route("v2", "routes/v2.tsx"),
  route("internal/strategy", "routes/internal-strategy.tsx"),
] satisfies RouteConfig;
