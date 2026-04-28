import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '83f9fde50599408e5fd2e11cdad2defcc35052be', queries,  });
export default client;
  