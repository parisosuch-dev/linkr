import { createClientComponentClient, type User } from "@supabase/auth-helpers-nextjs";
import validator from 'validator';

const postLink = async ({ url, user }: { url: string, user: User }) => {
    // verify if url is valid
    if (!validator.isURL(url)) {
        return { data: null, error: { message: "url is not valid." } };
    }

    const supabase = createClientComponentClient();
    const { data, error } = await supabase.from('link').insert({ url: url, user: user.id }).select('id');

    return { data, error }

}

export default postLink;