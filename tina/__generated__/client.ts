import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '6abfeeca541df44bbb0926b7c12a635d355afd0e', queries,  });
export default client;
  