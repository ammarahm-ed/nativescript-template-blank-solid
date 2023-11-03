import { createStackRouter, RouteDefinition } from "solid-navigation";

declare module "solid-navigation" {
  export interface Routers {
    Default: {
      ScreenOne: RouteDefinition;
      ScreenTwo: RouteDefinition;
    };
  }
}

export const { Route, StackRouter, useParams, useRouter } =
  createStackRouter<"Default">();