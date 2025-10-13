"use client"

import * as React from "react"
import {cn} from "@/lib/utils"

function Table({className, ...props}) {
    return (
        <div data-slot="table-container" className="relative w-full overflow-x-auto">
            <table
                data-slot="table"
                className={cn("w-full caption-bottom text-sm", className)}
                {...props}
            />
        </div>
    )
}

function TableHeader({className, ...props}) {
    return (
        <thead
            data-slot="table-header"
            className={cn("[&_tr]:border-b", className)}
            {...props}
        />
    )
}

function TableBody({className, ...props}) {
    return (
        <tbody
            data-slot="table-body"
            className={cn("text-secondary-txt [&_tr:last-child]:border-0", className)}
            {...props}
        />
    )
}

function TableRow({className, ...props}) {
    return (
        <tr
            data-slot="table-row"
            className={cn(
                "hover:bg-disable-txt/50 data-[state=selected]:bg-disable-txt border-b border-divider-light transition-colors",
                className
            )}
            {...props}
        />
    )
}

function TableHead({className, ...props}) {
    return (
        <th
            data-slot="table-head"
            className={cn(
                "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

function TableCell({className, ...props}) {
    return (
        <td
            data-slot="table-cell"
            className={cn(
                "py-2 px-5 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

export {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
}