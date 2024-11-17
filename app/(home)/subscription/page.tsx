import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return <h1 className="text-4xl font-bold">Subscription Pages</h1>;
};

export default SubscriptionPage;
