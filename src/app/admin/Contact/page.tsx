'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, PlusCircle, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "../components/Navbar";

const leadsData = Array.from({ length: 30 }, (_, i) => ({
  id: `lead-${i + 1}`,
  name: `Sample Lead ${i + 1}`,
  company: `Company ${i + 1}`,
  email: `lead${i + 1}@example.com`,
  phone: `555-${String(i + 1).padStart(3, '0')}-5555`,
  status: ["New", "Contacted", "Qualified", "Proposal Sent"][i % 4],
  source: [
    "Cold Call",
    "Advertisement",
    "Web Download",
    "Seminar Partner",
    "Online Store",
    "Partner",
    "External Referral",
  ][i % 7],
  owner: "Deepanshu Varshney",
  lastContact: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString(),
}));

const statusColors: Record<string, string> = {
  "New": "bg-blue-100 text-blue-800",
  "Contacted": "bg-purple-100 text-purple-800",
  "Qualified": "bg-green-100 text-green-800",
  "Proposal Sent": "bg-yellow-100 text-yellow-800",
};

const sourceColors: Record<string, string> = {
  "Cold Call": "bg-gray-100 text-gray-800",
  "Advertisement": "bg-indigo-100 text-indigo-800",
  "Web Download": "bg-blue-100 text-blue-800",
  "Seminar Partner": "bg-pink-100 text-pink-800",
  "Online Store": "bg-orange-100 text-orange-800",
  "Partner": "bg-teal-100 text-teal-800",
  "External Referral": "bg-cyan-100 text-cyan-800",
};

const Contact = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  
  return (
    <>
    <Navbar/>
    <div className="p-4 md:p-6 space-y-6 h-screen flex flex-col bg-gray-50">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contacts Management</h2>
          <p className="text-sm text-muted-foreground">View and manage all your leads in one place</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button 
            className="gap-2 sm:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="gap-2 w-full sm:w-auto">
            <PlusCircle className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Create Lead</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 flex-1 overflow-hidden">
        {/* Filter Sidebar - Collapsible on small screens */}
        <div className={`w-full lg:w-64 space-y-4 overflow-y-auto transition-all duration-300 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search leads..."
              className="pl-9"
            />
          </div>
          
          <div className="space-y-4 p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-sm">Filters</h4>
              <Button className="text-primary text-xs h-6">
                Reset
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-medium mb-2 text-gray-500 uppercase tracking-wider">Status</h5>
                <div className="space-y-2">
                  {Object.keys(statusColors).map((status) => (
                    <div key={status} className="flex items-center space-x-2">
                      <Checkbox id={`status-${status}`} className="h-4 w-4" />
                      <label
                        htmlFor={`status-${status}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-xs font-medium mb-2 text-gray-500 uppercase tracking-wider">Source</h5>
                <div className="space-y-2">
                  {Object.keys(sourceColors).map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <Checkbox id={`source-${source}`} className="h-4 w-4" />
                      <label
                        htmlFor={`source-${source}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {source}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="flex-1 space-y-4 flex flex-col overflow-hidden">
          <div className="rounded-md border bg-white shadow-sm flex-1 overflow-hidden flex flex-col">
            <div className="relative flex-1 overflow-hidden">
              <div className="overflow-y-auto h-full">
                <Table className="min-w-full">
                  <TableHeader className="bg-gray-50 sticky top-0">
                    <TableRow>
                      <TableHead className="w-10">
                        <Checkbox className="h-4 w-4" />
                      </TableHead>
                      <TableHead className="min-w-[180px]">Lead</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Last Contact</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead className="w-10"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leadsData.map((lead) => (
                      <TableRow key={lead.id} className="hover:bg-gray-50">
                        <TableCell>
                          <Checkbox className="h-4 w-4" />
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900">{lead.name}</span>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>ID: {lead.id}</span>
                              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                              <a href={`mailto:${lead.email}`} className="hover:text-primary hover:underline truncate max-w-[120px]">
                                {lead.email}
                              </a>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-700">{lead.company}</TableCell>
                        <TableCell>
                          <Badge className={`${statusColors[lead.status]} capitalize rounded-md px-2 py-0.5 text-xs`}>
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${sourceColors[lead.source]} capitalize rounded-md px-2 py-0.5 text-xs`}>
                            {lead.source}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-500">
                            {lead.lastContact}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                              {lead.owner.split(" ").map(n => n[0]).join("")}
                            </div>
                            <span className="text-sm text-gray-700 truncate max-w-[100px]">{lead.owner}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            {/* <DropdownMenuContent align="end" className="w-40">
                              <DropdownMenuItem>View</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent> */}
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-700">1</span> to <span className="font-medium text-gray-700">{leadsData.length}</span> of{" "}
              <span className="font-medium text-gray-700">{leadsData.length}</span> leads
            </div>
            <div className="flex gap-2">
              <Button className="h-8 gap-1" disabled>
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Previous</span>
              </Button>
              <Button className="h-8 gap-1">
                <span className="sr-only sm:not-sr-only">Next</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;