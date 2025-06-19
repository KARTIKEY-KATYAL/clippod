"use server";

import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import NavHeader from "~/components/nav-header";
import { Toaster } from "~/components/ui/sonner";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await db.user.findUniqueOrThrow({
    where: { id: session.user.id },
    select: { credits: true, email: true },
  });

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/10">
      <NavHeader credits={user.credits} email={user.email} />
      <main className="container mx-auto flex-1 py-8 px-6">{children}</main>
      <Toaster />
    </div>
  );
}
