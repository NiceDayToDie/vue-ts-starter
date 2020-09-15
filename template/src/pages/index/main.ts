import Application from "@/application";
import { routes } from "./router";
import { modules } from "@/store";

new Application().start(routes, modules);
