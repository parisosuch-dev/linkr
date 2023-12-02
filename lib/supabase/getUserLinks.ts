import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const getUserLinks = async (user: User) => {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase
        .from('link')
        .select().eq("user", user.id).order("created_at", { ascending: false });
    if (error) {
        Promise.reject(error);
    }
    return data;
}

export default getUserLinks;