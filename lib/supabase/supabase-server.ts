import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// export the server component client by default
export default () => createServerComponentClient({ cookies, });