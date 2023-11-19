import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const getLink = async (urlID: string) => {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase
        .from('link')
        .select('url').eq("id", parseInt(urlID));
    if (error) {
        console.log("error");
        return error;
    }
    return data[0].url;
}

export default getLink;