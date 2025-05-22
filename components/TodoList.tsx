"use client" 
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "./ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Span } from "next/dist/trace";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState<boolean>(false)


  return (
    <div>
      {/* Calendar */}
      <h1 className="text-lg font-medium mb-2">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon/>
            {date? format(date,"PPP"):(<span>Pick a date</span>)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date)=>{
              setDate(date)
              setOpen(false)
            }}
            />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <Card className="p-4" key={i}>
              <div className="flex items-center gap-4">
                <Checkbox id={`item${i}`} checked />
                <label
                  htmlFor={`item${i}`}
                  className="text-sm text-muted-foreground"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, non blanditiis eius dolores corrupti, doloribus
                  repellat modi amet dolor esse minus, optio numquam a nobis.
                  Mollitia illum modi doloribus impedit?
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
