"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { format, parseISO } from "date-fns";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Article = {
  slug: string;
  title: string;
  author: string;
  views: number;
  publishedAt: Date;
  timeToRead: number;
};

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "slug",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Slug
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "views",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Views
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="w-full text-center font-medium">
          {row.getValue("views")}
        </div>
      );
    },
  },
  {
    accessorKey: "publishedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formattedDate = format(
        row.getValue("publishedAt"),
        "HH:mm dd/MM/yyyy"
      );

      return (
        <div className="w-full  text-center font-medium">{formattedDate}</div>
      );
    },
  },
  {
    accessorKey: "timeToRead",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time read
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
        return (
          <div className="w-full text-center font-medium">
            {row.getValue("timeToRead")+ " "} min
          </div>
        );
      },
  },
];
