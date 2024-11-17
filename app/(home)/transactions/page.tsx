import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return <h1 className="text-4xl font-bold">Transactions Pages</h1>;
};

export default TransactionsPage;
