"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { Sparkles, CreditCard } from "lucide-react";

const NavHeader = ({ credits, email }: { credits: number; email: string }) => {
  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 flex justify-center border-b border-border/50 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-6 py-2">
        <Link href="/dashboard" className="flex items-center group">
          <div className="font-sans text-xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
              ClipPod
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className="h-9 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 transition-all duration-200 shadow-sm border-0"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-primary" />
              {credits} credits
            </Badge>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="h-9 text-sm font-semibold border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 shadow-sm"
            >
              <Link href="/dashboard/billing" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Buy more
              </Link>
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full p-0 hover:ring-2 hover:ring-primary/20 transition-all duration-200"
              >
                <Avatar className="h-10 w-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-semibold">
                    {email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 shadow-lg border border-border/50">
              <DropdownMenuLabel className="p-3 bg-muted/50 rounded-md mb-2">
                <p className="text-sm font-medium text-foreground">{email}</p>
                <p className="text-xs text-muted-foreground mt-1">Premium Account</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem asChild className="cursor-pointer p-3 rounded-md">
                <Link href="/dashboard/billing" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Billing & Plans
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem
                onClick={() => signOut({ redirectTo: "/login" })}
                className="text-destructive cursor-pointer p-3 rounded-md focus:bg-destructive/10"
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
