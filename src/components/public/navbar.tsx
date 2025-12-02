"use client";
import { useState } from "react";

import Link from "next/link";

import { Search, Bell, Menu, User, BookOpen, LayoutDashboard, GraduationCap, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar({ currentPage, isLoggedIn = true }: { currentPage: string; isLoggedIn?: boolean }) {
  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Courses",
      to: "#",
    },
    {
      label: "My Learning",
      to: "#",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="from-primary flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br to-blue-700">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-neutral-900">Mekari University</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant={currentPage === item.to ? "default" : "ghost"}
                  className={currentPage === item.to ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : ""}
                  asChild
                >
                  <Link href={item.to}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search - Desktop */}
            <div className="hidden w-64 items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 lg:flex">
              <Search className="h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full border-none bg-transparent text-neutral-700 outline-none placeholder:text-neutral-400"
              />
            </div>

            {isLoggedIn ? (
              <>
                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center bg-blue-600 p-0">
                        3
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start py-3">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>New course available</span>
                      </div>
                      <span className="ml-4 text-neutral-500">Advanced Python Programming is now live</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start py-3">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>Certificate ready</span>
                      </div>
                      <span className="ml-4 text-neutral-500">Your React certification is ready to download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start py-3">
                      <span>Assignment due soon</span>
                      <span className="text-neutral-500">Project submission due in 2 days</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2 px-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline">John Doe</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" asChild>
                      <Link href={""}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" asChild>
                      <Link href={""}>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" asChild>
                      <Link href={""}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        My Courses
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" asChild>
                      <Link href={""}>Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" asChild>
                      <Link href={""}>Sign Out</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={"/login"}>Sign In</Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link href={"/register"}>Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="icon"
              className={"md:hidden"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-neutral-200 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={currentPage === item.to ? "default" : "ghost"}
                className={`justify-start rounded-md px-4 py-3 text-left transition-colors ${currentPage === item.to ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : ""}`}
                asChild
              >
                <Link href={item.to}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
