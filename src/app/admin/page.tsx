import EditBlogPost from "@/src/components/EditBlogPost";
import { GetAuthCurrentUserServer } from "@/src/utils/util";

const Page = async () => {
    const user = await GetAuthCurrentUserServer()
    console.log(user)
    if (!user) {
        return 'Loading...'
    }
    return <div className="w-full h-full">
        <EditBlogPost />
    </div>
};

export default Page;