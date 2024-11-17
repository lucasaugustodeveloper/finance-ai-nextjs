import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="flex h-full flex-col items-center justify-center p-8">
        <div className="w-3/5">
          <Image
            className="mb-8"
            src="/images/logo.svg"
            alt="Finance AI"
            width={173}
            height={39}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          />

          <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
          <p className="mb-8 text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>

          <SignUpButton>
            <Button variant="outline" className="w-full">
              <LogInIcon className="mr-2" />
              Fazer login ou criar conta
            </Button>
          </SignUpButton>
        </div>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/images/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
