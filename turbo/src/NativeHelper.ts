import { TurboModule, TurboModuleRegistry } from "react-native";
import { Thread } from "./types";

export interface Spec extends TurboModule {
  transmitString(string: string): Promise<string>;
  transmitJSON(threads: Thread[]): Promise<Thread[]>;
}

export default TurboModuleRegistry.get<Spec>(
  "RtnTurboModulesHelper"
) as Spec | null;
