import createServerComponentClient from "@/lib/supabase/supabase-server"
import { createClientComponentClient, type User } from "@supabase/auth-helpers-nextjs";
import validator from 'validator';

const postLink = async ({ url, user }: { url: string, user: User }) => {
    // verify if url is valid
    if (!validator.isURL(url)) {
        return "> url is not valid.";
    }

    const supabase = createClientComponentClient();
    const { error } = await supabase.from('link').insert({ url: url, user: user.id });

    if (error) {
        return error.message;
    }
}

export default postLink;