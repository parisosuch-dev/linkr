import { createClientComponentClient, type User } from "@supabase/auth-helpers-nextjs";
import validator from 'validator';

const postLink = async ({ url, user }: { url: string, user: User | null }) => {
    // verify if url is valid
    if (!validator.isURL(url)) {
        return { data: null, error: { message: "url is not valid." } };
    }

    const supabase = createClientComponentClient();
    if (user) {
        const { data, error } = await supabase.from('link').insert({ url: url, user: user.id }).select('id');
        return { data, error }
    }
    // if there is no user: post without user
    const { data, error } = await supabase.from('link').insert({ url: url }).select('id');
    return { data, error }




}

export default postLink;